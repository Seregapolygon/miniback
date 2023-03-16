import express from "express"
import cors from "cors"

export default {

    toCamelCase(str) {
        let arr = str.split('-')
        let capital = arr.map((item, i)=> {
            if (i !== 0) return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
            else return item.toLowerCase()
        })
        return capital.join("")
    },

    endPromise(promise, resolve, reject, message = 'error') {
        promise.then(result => {
            if (result) {
                const paramNames = Object.keys(result)
                paramNames.forEach(key => {
                    if (result[key] === null) {
                        result[key] = { uid: 0, name: '' }
                    }
                })
                resolve(result)
            }
            else reject({ error: message })
        }).catch(error => {
            reject({
                error: message,
                raw: error
            })
        })
    },

    expressServerPrepare() {
        const server = express()
        server.use(cors({maxAge: 86400}))
        server.use(express.json()) // for parsing application/json
        server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
        return server
    }
}
