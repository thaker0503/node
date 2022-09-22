const fibonacci = require('./fibonacci');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter number: ", (numb,type) => {

    console.log("Numb ==>",numb)
    console.log("Type ==>",type)

    readline.close();
})