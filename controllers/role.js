import BaseController from "../structure/base-controller.js";

class RoleController extends BaseController{

    constructor() {
        // Добавим роуты по умолчанию.
        super()

        this.entityName = 'role'
        // Добавляем обработчики роутов.
        // this.router.get('/:ANY_PARAM', (req, res) => {
        //     this.resultProcess(this.ANY_SERVICE.ANY_METHOD(this.entityName, req.params), res)
        // })

    }
}

const roleController = new RoleController()

export default roleController
