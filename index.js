import App from "./structure/app.js"
import deviceModelController from "./controllers/device-model.js"

// Создаемп приложение.
let nodeApp = new App(true)

// Подключаем недостающие контроллеры.
nodeApp.setController('/device-models', deviceModelController)

// Запускаем приложение.
nodeApp.run()
