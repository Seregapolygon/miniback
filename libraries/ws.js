import {WebSocket, WebSocketServer} from "ws"
import auth from "./auth.js"
import config from "../config/index.js"

class WsConnection {
    connections = []
    wss = undefined

    constructor() {
        this.wss = new WebSocketServer({ port: config.wsPort })

        this.wss.on('connection', client => {
            console.log('new connection from web', client)
            client.on('message', message => {
                const body = message.toString()
                if (body === 'exit') client.close()

                const result = auth.verifyToken(body)
                if (result.error) {
                    console.log('Token off, connection close.')
                    client.close()
                }
                else this.connections.push({ client, token:result })
            })
        })
    }

    start() {
        setInterval(() => {
            if (this.connections.length) {}
            this.connections.forEach(con => {
                if (con.client.readyState === WebSocket.OPEN)
                    // con.client.send('Device is offline ' + new Date().getTime())
                    con.client.send(JSON.stringify({
                        timestamp: new Date().getTime(),
                        message: "Device is offline!"
                    }))
                else
                    con.client.close()
            })
            // Удалим ненужные соединения.
            // this.connections = this.connections.map(con => {
            //     if (con.client.readyState === WebSocket.OPEN) return con
            //     else console.log('ws connection deleted')
            // })
        }, 5000)
    }
}

const wsConnection = new WsConnection()

export default wsConnection
