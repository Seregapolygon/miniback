export default {

    deviceModelList: {
        uid: true,
        name: true,
        type: true,
        photo: true,
        deviceReadingList: { select: { name: true } },
        deviceCommandList: { select: { name: true } }
    },

    deviceModelItem: {
        uid: true,
        name: true,
        type: true,
        photo: true,
        vendor: { select: { uid: true, name: true } },
        deviceReadingList: { select: { uid: true, name: true } },
        deviceCommandList: { select: { uid: true, name: true } }
    },

    vendorSelection: {
        uid: true,
        name: true
    }
}
