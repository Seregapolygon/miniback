import {readdir} from "fs/promises"
import fs from "fs"

class Table {
    data = []
    source = ''

    /**
     * Создает объект для управления одной "таблицей" в БД.
     * @param sourceFileName - имя файла где хранятся данные.
     */
    constructor (sourceFileName) {
        this.source = sourceFileName
        const bdFile = fs.readFileSync(sourceFileName, "utf8")
        if (bdFile) this.data = JSON.parse(bdFile)
    }

    /**
     * Вернет один элемент данных по Id
     * @param id - идентификатор элемента данных.
     * @return {*}
     */
    getById (id) {
        const result = this.data.find(el => el.id && el.id === id)
        return result
    }

    /**
     * Поиск элемента по произвольному реквизиту.
     * @param name - наименование реквизита.
     * @param value - значение реквизита.
     * @return {*} - искомая структура с элементом.
     */
    getByProp (name, value) {
        return this.data.find(el => el[name] && el[name] === value)
    }

    /**
     * Получить нужную страницу данных.
     * @param page - номер страницы, начиная с 0.
     * @param items - количество элементов на странице.
     * @param filter - строка поиска по наименованию.
     * @return {*[]} - отфильтрованный массив по индексам.
     */
    getList (page, items, filter) {
        const startItem = page * items
        const endItem = startItem + items
        return this.data.filter((el, index) => index >= startItem && index < endItem && el.name && el.name.includes(filter))
    }

    /**
     * Сохраняет элемент данных. Сначала ищет с таким Id чтобы обновить, если не находит, то пушит в конец.
     * @param payload - структура DTO с данными элемента.
     * @return boolean - сохранили или нет.
     */
    save (payload) {
        if (payload.id) {
            const oldIndex = this.data.findIndex(el => el.id && el.id === payload.id)
            if (oldIndex > -1)
            {
                this.data[oldIndex] = payload
                this.update()
                return true
            } else {
                this.data.push(payload)
                this.update()
                return true
            }
        }
        return false
    }

    /**
     * Удаление записи таблицы по id.
     * @param id - идентификатор записи.
     * @return {boolean} - true если удален, false если удаление не прошло.
     */
    delete(id) {
        if (id) {
            const oldIndex = this.data.findIndex(el => el.id && el.id === id)
            if (oldIndex > -1)
            {
                delete this.data[oldIndex]
                this.update()
                return true
            } else {
                return false
            }
        }
        return false
    }

    /**
     * Безусловное добавление в конец массива.
     * @param payload
     */
    add (payload) {
        this.data.push(payload)
        this.update()
    }

    /**
     * Выгрузить содержимое из ОП в файл.
     */
    update () {
        fs.writeFileSync(this.source, JSON.stringify(this.data))
    }
}

class FileDB {
    // Существующие таблицы.
    tokens = undefined
    recovery = undefined

    constructor() {}

    async connect () {
        const files = await readdir("database/tables")
        for (const file of files) {
            const tableName = (file.substring(0, file.length - 5)).toLowerCase()
            // this.table[tableName] = new Table('database/tables/' + file)
            this[tableName] = new Table('database/tables/' + file)
        }
    }
}

const fileDB = new FileDB()

export default fileDB
