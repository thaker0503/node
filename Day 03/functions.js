function division(num1, num2) {
    if (num1 < num2) {
        console.log("Division not possible...");
        return;
    } else {
        return num1 / num2;
    }
}

var x = 10;
var y = 2;

console.log("Dividing", x, "by", y,",we get:", division(x, y));