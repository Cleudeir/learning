const stringSimilarity = require("string-similarity");

const group = function (data) {
    let result = data
    result.forEach((obj) => {
        if (obj.descricao === undefined) {
            return
        }
        const item = obj.descricao.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
        result = result.map(x => {
            if (x && x.descricao !== undefined) {
                const string = x.descricao.replace(/[^a-zA-Z\s]/g, "").toLowerCase()
                const compare = stringSimilarity.compareTwoStrings(string, item)
                const include1 = item.includes(string)
                const include2 = string.includes(item)
                if (include1 || include2) {
                    if (string.length < item.length) {
                        return { ...x, descricao: x.descricao }
                    } else {
                        return { ...x, descricao: obj.descricao }
                    }
                } else {
                    if (compare > 0.8) {
                        return { ...x, descricao: obj.descricao }
                    } else {
                        return x
                    }
                }
            } else {
                return x
            }
        })
    })
    return result
}


module.exports = group;