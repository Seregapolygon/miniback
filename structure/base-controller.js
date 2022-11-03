import express from 'express'
import BaseService from "./base-service.js"

class BaseController {

    baseService = new BaseService()
    service = undefined
    entityName = ''
    router = express.Router()

    resultProcess(result, res) {
        result.then(response => {
            res.send(response)
            res.end()
        }).catch(error => {
            res.status(404).json(error)
            res.end()
        })
    }

    constructor(entityName = '') {
        // Если передано название сущности, то установим ее сразу.
        this.entityName = entityName

        // Определим entityName наверняка.
        this.router.use((req, res, next) => {
            const entityName = req.entityName || this.entityName
            req.entityName = entityName
            if (!req.payload) req.payload = {}
            next()
        })

        // Валидация параметров.
        this.router.param('id', (req, res, next, value) => {
            req.payload.id = Number(value)
            if (req.payload.id && req.payload.id > 0) next()
            else {
                res.status(404).json({error: "'id' param has a wrong value."})
                res.end()
            }
        })
        this.router.param('page', (req, res, next, value) => {
            req.payload.page = Number(value)
            next()
        })
        this.router.param('items', (req, res, next, value) => {
            req.payload.items = Number(value)
            next()
        })
        this.router.param('filter', (req, res, next, value) => {
            req.payload.filter = String(value)
            next()
        })

        // Добавляем обработчики роутов.
        // Получение списка объектов с фильтрацией по наименованию.
        /* this.router.get('/:page/:items/:filter', (req, res) => {
            this.resultProcess(this.baseService.getList(req.entityName, req.payload), res)
        })
        // Получение списка объектов без фильтрации.
        this.router.get('/:page/:items', (req, res) => {
            req.payload.filter = ''
            this.resultProcess(this.baseService.getList(req.entityName, req.payload), res)
        }) */
        // Получение данных одного объекта.
        this.router.get('/:id', (req, res) => {
            this.resultProcess(this.baseService.getItem(req.entityName, req.payload), res)
        })
        // Для получения списка с параметрами.
        this.router.get('/', (req, res, next) => {
            req.payload = req.query
            if (this.service) next()
            else this.resultProcess(this.baseService.getList(req.entityName, req.payload), res)
        })
        // Создание объекта.
        this.router.post('/', (req, res) => {
            this.resultProcess(this.baseService.create(req.entityName, req.body), res)
        })
        // Обновление объекта.
        this.router.put('/:id', (req, res) => {
            req.body.id = req.payload.id
            this.resultProcess(this.baseService.update(req.entityName, req.body), res)
        })
        // Удаление объекта по id.
        this.router.delete('/:id', (req, res) => {
            this.resultProcess(this.baseService.delete(req.entityName, req.payload), res)
        })
    }
}

export default BaseController
