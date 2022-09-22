const fibonacci = require('./fibonacci');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question("Do you want a list (yes or no): ", bool => {
    readline.question("Enter number: ", numb => {

        // console.log("Numb ==>", numb)
    
        if (bool === "y" || bool === "yes") {
            fibonacci.fib(numb,"list")
        } else {
            fibonacci.fib(numb)
        }
        readline.close();
    });
})
