import BaseController from "../structure/base-controller.js";

class DeviceModelController extends BaseController{

    constructor() {
        // Добавим роуты по умолчанию.
        super()

        this.entityName = 'deviceModel'
        // Добавляем обработчики роутов.
        // this.router.get('/:ANY_PARAM', (req, res) => {
        //     this.resultProcess(this.ANY_SERVICE.ANY_METHOD(this.entityName, req.params), res)
        // })

    }
}

const deviceModelController = new DeviceModelController()

export default deviceModelController
