import db from "../libraries/prisma.js"

class BaseService{

    getItem(entity, body) {
        return new Promise((resolve, reject) => {
            db[entity].findUnique({
                where: {
                    id: +body.id
                }
            }).then(result => {
                resolve(result)
            }).catch(error => {
                reject({ error: 'nothing' })
            })
        })
    }

    getList(entity, body) {
        return new Promise((resolve, reject) => {
            const fString = body.filter.substring(1, body.filter.length)
            db[entity].findMany({
                skip: Number(body.page) * Number(body.items),
                take: Number(body.params.items),
                where: { name: { contains: fString } }
            }).then(result => {
                resolve(result)
            }).catch(error => {
                reject({
                    error: 'nothing'
                })
            })
        })
    }

    save(entity, body) {
        return new Promise((resolve, reject) => {
            const newVendor = body
            delete newVendor.id
            db[entity].upsert({
                where: { id: +body.id },
                update: newVendor.body,
                create: newVendor.body
            }).then(() => {
                resolve({ message: 'vendor was save' })
            }).catch(error => {
                reject({ error: "vendor wasn't save" })
            })
        })
    }
}

export default BaseService
