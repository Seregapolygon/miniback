import db from "../libraries/prisma.js"
import functions from "../libraries/functions.js";
import dto from "./dto.js"

class BaseService{

    getItem(entity, body) {
        return new Promise((resolve, reject) => {
            const query = { where: { id: body.id } }
            if (dto[entity + 'Item']) query.select = dto[entity + 'Item']
            functions.endPromise(db[entity].findUnique(query), resolve, reject, `Failed to get ${entity} item`)
        })
    }

    getList(entity, body) {
        return new Promise((resolve, reject) => {
            if (!body.filter) body.filter = ''
            const query = {
                skip: Number(body.page) * Number(body.items),
                take: Number(body.items),
                where: { name: { contains: body.filter } }
            }
            if (dto[entity + 'List']) query.select = dto[entity + 'List']
            functions.endPromise(db[entity].findMany(query), resolve, reject, `Error getting ${entity} list`)
        })
    }

    save(entity, body) {
        return new Promise((resolve, reject) => {
            const data = body
            delete data.id
            const response = db[entity].upsert({
                where: { id: body.id },
                update: data.body,
                create: data.body
            })
            functions.endPromise(response, resolve, reject, `${entity} item wasn't save`)
        })
    }

    create(entity, body) {
        return new Promise((resolve, reject) => {
            const response = db[entity].create({
                data: body
            })
            functions.endPromise(response, resolve, reject, `${entity} item wasn't created`)
        })
    }

    update(entity, body) {
        return new Promise((resolve, reject) => {
            const data = {... body}
            delete data.id
            const response = db[entity].update({
                where: { id: body.id },
                data: data
            })
            functions.endPromise(response, resolve, reject, `${entity} item wasn't updated`)
        })
    }

    delete(entity, body) {
        return new Promise((resolve, reject) => {
            const response = db[entity].delete({ where: { id: body.id } })
            functions.endPromise(response, resolve, reject, `${entity} item wasn't deleted`)
        })
    }
}

export default BaseService
