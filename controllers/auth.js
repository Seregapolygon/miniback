import express from 'express'
import authService from "../services/auth.js"
import functions from "../libraries/functions.js"

class AuthController {

    mainRouter = express.Router()
    protectedRouter = express.Router()

    simpleRouting(req, res) {
        try {
            let command = functions.toCamelCase(req.params.command)
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
        this.mainRouter.get('/:command', (req, res) => { this.simpleRouting(req,res) })
        this.mainRouter.post('/:command', (req, res) => { this.simpleRouting(req,res) })
        this.protectedRouter.post('/:command', (req, res) => { this.simpleRouting(req,res) })
        this.protectedRouter.get('/:command', (req, res) => { this.simpleRouting(req,res) })
    }
}

const authController = new AuthController()

export default authController
