import BaseController from "../structure/base-controller.js"
import deviceModelService from "../services/device-model.js"

class ImageController extends BaseController{

    constructor() {
        // Добавим роуты по умолчанию.
        super('image')
        this.service = deviceModelService

        // Добавляем обработчики роутов.
        this.router.get('/', (req, res) => {
             this.resultProcess(deviceModelService.getModelList(req.query), res)
        })

    }
}

const deviceModelController = new DeviceModelController()

export default deviceModelController
