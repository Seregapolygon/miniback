import BaseController from "../structure/base-controller.js";
import express from "express";

class VendorController extends BaseController{

    constructor() {
        // Добавим роуты по умолчанию.
        super('vendor')

        // this.router = new express.Router()

        // Добавляем обработчики роутов.
        // this.router.get('/:ANY_PARAM', (req, res) => {
        //     this.resultProcess(this.ANY_SERVICE.ANY_METHOD(this.entityName, req.params), res)
        // })

    }
}

const vendorController = new VendorController()

export default vendorController
