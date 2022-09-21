const Fibseries = require('./Fibseries.js')
const Fibnumber = require('./Fibnumber.js')
exports.fib = function (numb, type) {
    if (type === "list") {
        Fibseries.Fibseries(numb)
    } else {
        Fibnumber.Fibnumber(numb)
    }
}