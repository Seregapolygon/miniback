import express from 'express'
import authService from "../services/auth.js"

class AuthController {

    mainRouter = express.Router()
    protectedRouter = express.Router()

    camelize(str) {
        let arr = str.split('-')
        let capital = arr.map(item=> item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
        return capital.join("")
    }

    simpleRouting(req, res) {
        try {
            let command = this.camelize(req.params.command)
            const result = authService[command](req.body)
            res.send(result)
            res.end()
        } catch (e) {
            res.sendStatus(404)
            res.end()
        }
    }

    constructor() {
        // Добавляем обработчики роутов.
        this.mainRouter.get('/:command', this.simpleRouting)
        this.mainRouter.post('/:command', this.simpleRouting)
        this.protectedRouter.post('/:command', this.simpleRouting)
        this.protectedRouter.get('/:command', this.simpleRouting)

    }
}

const authController = new AuthController()

export default authController
