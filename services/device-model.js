import db from "../libraries/prisma.js"
import dto from "../structure/dto.js";
import functions from "../libraries/functions.js";

class DeviceModelService{

    getModelList(params) {
        return new Promise((resolve, reject) => {
            if (!params.filter) params.filter = ''
            // Готовим базовый запрос.
            const query = {
                skip: Number(params.page) * Number(params.items),
                take: Number(params.items),
                where: { name: { contains: params.filter } }
            }
            // Добавляем отбор по списку типов.
            if (params.types) query.where.type = { in: params.types }
            // Добавляем структуру возвращаемого ответа.
            if (dto.deviceModelList) query.select = dto.deviceModelList
            // Исполняем...
            functions.endPromise(db.deviceModel.findMany(query), resolve, reject, `Error getting deviceModel list`)
        })
    }

}

const deviceModelService = new DeviceModelService()

export default deviceModelService
