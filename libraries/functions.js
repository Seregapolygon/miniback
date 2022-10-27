export default {

    toCamelCase(str) {
        let arr = str.split('-')
        let capital = arr.map((item, i)=> {
            if (i !== 0) return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
            else return item.toLowerCase()
        })
        return capital.join("")
    },

    endPromise(promise, resolve, reject, message = 'error') {
        promise.then(result => {
            if (result) resolve(result)
            else reject({ error: message })
        }).catch(error => {
            reject({
                error: message,
                raw: error
            })
        })
    }
}
