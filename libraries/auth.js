import jwt from "jsonwebtoken"
import fileDB from "../database/index.js"
import permissions from "./permissions.js"

// Строка секрет для формирования токена.
const secret = 'fmec-mini-back'

export default {

    /**
     * Формирование токена
     * @param payload - тело токена
     * @param exp - срок жизни токена, например '1d'
     * @return {*} - строка токена в формате ***.**********.***
     */
    generateToken (payload, exp) {
        return jwt.sign(payload, secret, {
            expiresIn: exp
        })
    },

    /**
     * Проверка токена на валидность.
     * @param token - строка токена в формате ***.*******.***
     * @return {{error}|*} - либо ошибка, либо тело токена.
     */
    verifyToken (token) {
        try {
            return jwt.verify(token, secret)
        } catch (e) {
            return { error: e}
        }
    },

    /**
     * Автоматическое формирование пары токенов.
     * @param payload - тело токена.
     * @return {{accessToken: *, refreshToken: *}} - структура с парой токенов.
     */
    generateCouple (payload) {
        const couple = {
            accessToken: this.generateToken(payload, '6h'),
            refreshToken: this.generateToken(payload, '5d')
        }
        fileDB.tokens.add(couple)
        fileDB.tokens.update()
        return couple
    },

    /**
     * Обновление пары токенов.
     * @param refreshToken - Живучий токен для обновления
     * @return {{error: string}|{accessToken: *, refreshToken: *}}
     */
    refreshToken (refreshToken) {
        // Проверим refresh token на срок годности.
        const refreshBody = this.verifyToken(refreshToken)
        if (refreshBody.error) return { error: 'refresh token expired' }

        // Найдем его в BD.
        const tokenInBD = fileDB.tokens.getByProp('refreshToken', refreshToken)
        if (tokenInBD) {
            // Сформировали пару новых токенов.
            const newCouple = this.generateCouple({
                login: refreshBody.login,
                scope: permissions
            })
            fileDB.tokens.add(newCouple)
            // Удаляем старый.
            fileDB.tokens.data = fileDB.tokens.data.filter(el => el.refreshToken !== refreshToken)
            fileDB.tokens.update()
            return newCouple
        } else {
            return { error: "token doesn't exist" }
        }
    },

    /**
     * Удаляет просроченные токены из базы. Проверка идет по токенам обновления.
     */
    deleteExpired: function () {
        const tLength = fileDB.tokens.data.length
        fileDB.tokens.data = fileDB.tokens.data.filter(el => {
            const body = this.verifyToken(el.refreshToken)
            return !body.error
        })
        if (tLength !== fileDB.tokens.data.length) {
            console.log('tokens updated')
            fileDB.tokens.update()
        }
    }
}
