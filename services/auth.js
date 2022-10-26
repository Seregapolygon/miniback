import auth from "../libraries/auth.js"
import fileDB from "../database/index.js"
import {tgSend} from "../libraries/tg.js"
import permissions from "../libraries/permissions.js"

class AuthService{

    login(body) {
        if (body.login === 'test@fmecgroup.com' && body.password === 'test1234') {
            const tokenData = auth.generateCouple({
                login: body.login,
                scope: permissions
            })
            return tokenData
            console.log("login ok", new Date().toString(), body)
        } else {
            console.log("login error", new Date().toString(), body)
            return {error: "user doesn't exist"}
        }
    }

    logout(body) {
        console.log('logout', new Date().toString())
        return { message: "user logout" }
    }

    registration(body) {
        console.log('registration', new Date().toString())
        if (body.login === 'old@fmecgroup.com') return { error: "user already exist" }
        else return { message: "user was registered" }
    }

    refreshToken(body) {
        if (body.refreshToken) return auth.refreshToken(body.refreshToken)
        else return { error: 'refresh token is absent' }
    }

    recovery(body) {
        if(body.login === 'new@fmecgroup.com') return { error: "user doesn't exist"}
        else {
            const code = "c" + new Date().getTime()
            fileDB.recovery.add({
                login: body.login,
                code: code,
                expired: new Date().getTime()
            })
            tgSend(code)
            return { message: "code was sent" }
        }
    }

    recoveryConfirmation(body) {
        const code = body.code
        // Найдем в БД сохраненный
        const codeRecord = fileDB.recovery.getByProp('code', code)
        if (codeRecord) return { message: 'code is right' }
        else return { error: 'code is wrong' }
    }

    setNewPassword(body) {
        console.log('set new password')
        return { message: 'password was changed'}
    }

    permissions(body) {
        return [
            'assets.view',
            'device.model.edit',
            'device.model.view',
            'vendor.view'
        ]
    }
}

const authService = new AuthService()

export default authService
