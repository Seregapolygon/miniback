import { WebSocketServer } from "ws"
import auth from "./auth.js"
import config from "../config/index.js"

const connections = []

const wss = new WebSocketServer({
    port: config.wsPort
})

wss.on('connection', client => {

    console.log('new connection from web', client)

    client.on('message', message => {

        const body = message.toString()
        if (body === 'exit') client.close()

        const result = auth.verifyToken(body)
        if (result.error) client.close()
        else connections.push({ client, token:result })
    })

})

console.log(`-- WS:${config.wsPort} is listening... --`)

export { connections }
