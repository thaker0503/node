exports.Fibseries = function (n) {
    let a = 0, b = 1, x = 0
    console.log("First " + n + " numbers of fibonacci series :")
    for (let i = 0; i < n; i++) {
        console.log(a)
        x = a + b
        a = b
        b = x
    }
}