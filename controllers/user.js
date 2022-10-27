import BaseController from "../structure/base-controller.js";

class UserController extends BaseController{

    constructor() {
        // Добавим роуты по умолчанию.
        super()

        this.entityName = 'user'
        // Добавляем обработчики роутов.
        // this.router.get('/:ANY_PARAM', (req, res) => {
        //     this.resultProcess(this.ANY_SERVICE.ANY_METHOD(this.entityName, req.params), res)
        // })

    }
}

const userController = new UserController()

export default userController
