import db from "./libraries/prisma.js";

const tables = {
    deviceModels: false,
    vendors: false,
    users: true
}

const deviceModels = [
    {
        "name":"Vega-si12", "type":"GPS", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-si13", "type":"GPS", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"AKBA", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-bs2", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Fobos", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-tp11", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-mbas", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"MOXA", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-hs0101", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-ms0101", "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Heba", "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"SGV", "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Счетчик воды", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Счетчик влажности", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Sensotera1", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Controler", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"SVK-15", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"SVK-15G", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Tapas-104", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Tem-104", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Terminal-m", "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Terminal-r", "type":"GPS", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-bs1", "type":"GPS", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"SVG-20g",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vega-sh1",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Smart-aqua",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Donfoss",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Weser",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Теплосчетчик",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Теплоучет-1",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Меркурий-200",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Меркурий-206",  "type":"Актуаторы", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Groen-vrs",  "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Groen-home",  "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Импульсный счетчик",  "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"ВКМ-россич",  "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Веб-блок",  "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Podpals",  "type":"Датчики температуры", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Взлет-м", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Gs-23", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"JSMGPRS-modem", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"СТЭ-10", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Vector-3", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"M95", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"LG-01", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"UMK-a", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"NRG-mera", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Teleofis", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Senlab-m", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    },
    {
        "name":"Carat-307", "type":"Датчики влажности", "photo":"https://nekta.tech/wp-content/uploads/2017/07/1-300x300.jpg",
    }
]
const vendors = [
    {
        "id": 1,
        "name": "CSS Electronics",
        "code": "000000001",
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000002",
        "name": "Digital matter",
        "id": 2,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000003",
        "name": "Dragino",
        "id": 3,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000004",
        "name": "Eastron",
        "id": 4,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000005",
        "name": "Efento NB IoT",
        "id": 5,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000006",
        "name": "Elsys",
        "id": 6,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000007",
        "name": "FMEC",
        "id": 7,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000008",
        "name": "mcf88",
        "id": 8,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000009",
        "name": "Milesight",
        "id": 9,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000010",
        "name": "MiroMico",
        "id": 10,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000011",
        "name": "Netvox",
        "id": 11,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000012",
        "name": "Pessl",
        "id": 12,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000013",
        "name": "Sensoterra ",
        "id": 13,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000014",
        "name": "Siemens",
        "id": 14,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000015",
        "name": "Siterwell Electronics",
        "id": 15,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000016",
        "name": "Tekelek",
        "id": 16,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000017",
        "name": "Tektelic",
        "id": 17,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000018",
        "name": "Ursalink",
        "id": 18,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000019",
        "name": "Vega",
        "id": 19,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000020",
        "name": "Vodafone",
        "id": 20,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    },
    {
        "code": "000000021",
        "name": "WebData",
        "id": 21,
        "description": "<h1>Это производитель</h1>",
        "photo": "https://cdn.shopify.com/s/files/1/0579/8032/1980/files/css-electronics-logo-flat.svg"
    }
]
const users = [
    { name: 'Artem' },
    { name: 'Sergey' }
]

if (tables.vendors) {
    vendors.forEach(record => {
        const newOne = {
            name: record.name,
            description: record.description,
            photo: record.photo
        }
        db.deviceModel.create({ data: newOne }).then(result => {
            console.log('ok')
        }).catch(error => {
            console.log(error)
        })
    })
}

if (tables.deviceModels) {
    deviceModels.forEach(record => {
        const newOne = {
            name: record.name,
            type: record.type,
            photo: record.photo
        }
        db.deviceModel.create({ data: newOne }).then(result => {
            console.log('ok')
        }).catch(error => {
            console.log(error)
        })
    })
}

if (tables.users) {
    users.forEach(record => {
        const newOne = {
            name: record.name,
        }
        db.user.create({ data: newOne }).then(result => {
            console.log('ok')
        }).catch(error => {
            console.log(error)
        })
    })
}
