export default {

    deviceModelList: {
        id: true,
        name: true,
        type: true,
        photo: true,
        deviceReadingList: { select: { name: true } },
        deviceCommandList: { select: { name: true } }
    },

    deviceModelItem: {
        id: true,
        name: true,
        type: true,
        photo: true,
        deviceReadingList: { select: { id: true, name: true } },
        deviceCommandList: { select: { id: true, name: true } }
    }
}
