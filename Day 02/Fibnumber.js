exports.Fibnumber = function (n) {
    let a = 0, b = 1, x = 0
    console.log(n + "th number in fibonacci series :")
    for (let i = 0; i < n; i++) {
        x = a + b
        a = b
        b = x
    }
    console.log(a)
}