import express from 'express'
import BaseService from "../services/base.js"

class BaseController {

    baseService = new BaseService()
    entityName = ''
    router = express.Router()

    resultProcess(result, res) {
        result.then(response => {
            res.send(response)
            res.end()
        }).catch(error => {
            res.sendStatus(404)
            res.end()
        })
    }

    constructor() {

        // Добавляем обработчики роутов.

        this.router.get('/:page/:items/:filter', (req, res) => {
            this.resultProcess(this.baseService.getList(this.entityName, req.params), res)
        })
        this.router.get('/:id', (req, res) => {
            this.resultProcess(this.baseService.getItem(this.entityName, req.params), res)
        })
        this.router.post('/', (req, res) => {
            this.resultProcess(this.baseService.save(this.entityName, req.params), res)
        })

    }
}

export default BaseController
