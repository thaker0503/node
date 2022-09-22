var random = require('random-number');
var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



var randomGenerator = random.generator({
    min: 1,
    max: 100,
    integer: true
});

var randomNum = randomGenerator();

function readNum() {
    randomNum = randomGenerator();
    rl.question("\nGuess the number between(1-100): ", num => {
        if (num < 1 || num > 100) {
            console.log("Please enter valid number :");
            readNum();
        } else {
            check(num)
            
        }
    })
}
readNum()

function check(num) {
    if (num == randomNum) {
        console.log("Random generated number :", randomNum)
        console.log("Your guessed number :", num)
        console.log("Correct Guess")
        rl.close();
    } else {
        console.log("Random generated number :",randomNum)
        console.log("Your guessed number :",num)
        console.log("Incorrect Guess")
        readNum()
    }
}