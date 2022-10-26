import BaseController from "./base.js";

class AccountController extends BaseController{

    constructor() {
        // Добавим роуты по умолчанию.
        super()

        this.entityName = 'account'
        // Добавляем обработчики роутов.
        // this.router.get('/:ANY_PARAM', (req, res) => {
        //     this.resultProcess(this.ANY_SERVICE.ANY_METHOD(this.entityName, req.params), res)
        // })

    }
}

const accountController = new AccountController()

export default accountController
