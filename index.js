import config from "./config/index.js"
import express from 'express'
import cors from "cors"
import auth from "./libraries/auth.js"
import fileDB from "./database/index.js"
import {connections} from "./libraries/ws.js"
import authController from "./controllers/auth.js"
import vendorController from "./controllers/vendor.js"
import accountController from "./controllers/account.js"
import deviceModelController from "./controllers/device-model.js"
import roleController from "./controllers/role.js"
import userController from "./controllers/user.js"

// Создаем и настраиваем серваки.
// .. основной сервер.
const protectedServer = express()
protectedServer.use(cors({maxAge: 86400}))
protectedServer.use(express.json()) // for parsing application/json
protectedServer.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Middleware для проверки токена во всех запросах.
protectedServer.use((req,res,next)=>{
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

// .. сервер для нужд авторизации.
const exposedServer = express()
exposedServer.use(cors({maxAge: 86400}))
exposedServer.use(express.json()) // for parsing application/json
exposedServer.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Формируем роутинг для нужд авторизации.
exposedServer.use('/auth', authController.mainRouter)
protectedServer.use('/auth', authController.protectedRouter)

// Формируем роутинг для всего остального.
protectedServer.use('/vendor', vendorController.router)
protectedServer.use('/account', accountController.router)
protectedServer.use('/device-model', deviceModelController.router)
protectedServer.use('/role', roleController.router)
protectedServer.use('/user', userController.router)

// Запускаем периодические задачи.
setInterval(() => {
    const recoveryLength = fileDB.recovery.data.length
    if(recoveryLength) {
        const cTime = new Date().getTime()
        fileDB.recovery.data = fileDB.recovery.data.filter((el) => (cTime - el.expired) < 60000)
        if (recoveryLength !== fileDB.recovery.data.length) {
            console.log('Delete recovery codes...')
            fileDB.recovery.update()
        }
    }
    auth.deleteExpired()
}, 10000)

// Отправляем тестовые данные для websocket-ов.
setInterval(() => {
    if (connections.length) {}
    connections.forEach(con => {
        if (con.client.readyState === WebSocket.OPEN)
            con.client.send('Device is offline ' + new Date().getTime())
        else
            con.client.close()
    })
}, 5000)

// Инициализируем базу данных и запускаем http сервак.
fileDB.connect().then(()=>{
    protectedServer.listen(config.protectedPort, function(){
        console.log('\n', 'Server start - ', new Date().toString())
        console.log(`-- Server HTTP:${config.protectedPort} is listening... --`)
    })
    exposedServer.listen(config.exposedPort, function(){
        console.log(`-- Server HTTP:${config.exposedPort} is listening... --`)
    })
})

