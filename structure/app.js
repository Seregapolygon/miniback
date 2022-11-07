import functions from "../libraries/functions.js";
import database from "../database/index.js";
import config from "../config/index.js";
import auth from "../libraries/auth.js";
import authController from "../controllers/auth.js";
import BaseController from "./base-controller.js";
import routeRepresentation from "../config/routeRepresentation.js";

class App {
    exposedServer = undefined
    protectedServer = undefined
    fileDB = undefined
    wsConnections = undefined

    constructor() {
        this.exposedServer = functions.expressServerPrepare()
        this.protectedServer = functions.expressServerPrepare()
        this.fileDB = database

        this._setTokenDefender()
        this._setAuthController()

        if (config.wsPort) {
            this.wsConnections = import('../libraries/ws.js').then(module => {
                module.default.start()
            }).catch(error => {
                console.log('WS has some trouble.')
            })
        }
    }

    //////////////////////////////////////////////////////////////////
    // PUBLIC
    //////////////////////////////////////////////////////////////////

    /**
     * Запустить приложение. Подключить сервера, web socket-ы и БД.
     */
    run() {
        // Инициализируем базу данных и запускаем http серверы.
        this.fileDB.connect().then(()=>{
            // Запускаем серверы.
            this._startServers()
        })
    }

    /**
     * Подключить контроллер для части внешнего пути.
     * @param path Часть пути для сопоставления, для которой будет срабатывать этот контроллер.
     * @param controller Контроллер с роутером для отработки всех запросов по этоиу пути.
     */
    setController (path, controller) {
        if (typeof path === 'string' && controller instanceof BaseController)
            this.protectedServer.use(path, controller.router)
    }

    //////////////////////////////////////////////////////////////////
    // PRIVATE
    //////////////////////////////////////////////////////////////////

    _setTokenDefender () {
        // Middleware для проверки токена во всех запросах.
        this.protectedServer.use((req,res,next)=>{
            // Нужна проверка токена.
            let token = req.headers['authorization']
            if (token) {
                token = token.split(' ')[1]
                const result = auth.verifyToken(token)
                if (result.error) {
                    res.sendStatus(401)
                    res.end()
                } else {
                    next()
                }
            } else {
                res.sendStatus(401)
                res.end()
            }
        })
    }

    _setBaseController () {
        // Формируем роутинг для неизвестных контроллеров.
        const baseController = new BaseController()
        this.protectedServer.param('entity', (req, res, next, value) => {
            // req.entityName = functions.toCamelCase(value)
            // req.entityName = req.entityName.substring(0, req.entityName.length - 1)
            if (routeRepresentation[value]) req.entityName = routeRepresentation[value]
            else req.entityName = 'none'
            next()
        })
        this.protectedServer.use('/:entity', baseController.router)

        this.exposedServer.param('entity', (req, res, next, value) => {
            req.entityName = functions.toCamelCase(value)
            next()
        })
        this.exposedServer.use('/:entity', baseController.router)
    }

    _setAuthController () {
        // Формируем роутинг для нужд авторизации.
        this.exposedServer.use('/auth', authController.mainRouter)
        this.protectedServer.use('/auth', authController.protectedRouter)
    }

    _startServers () {

        this._setBaseController()

        this.protectedServer.listen(config.protectedPort, function(){
            console.log(`-- Protected HTTP:${config.protectedPort} is listening... --`)
        })
        this.exposedServer.listen(config.exposedPort, function(){
            console.log(`-- Exposed HTTP:${config.exposedPort} is listening... --`)
        })
    }
}

export default App
