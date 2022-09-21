// const console = require('console');
import console from 'console';
// const http = require('http');
import http from 'http'
// var date = require("./mymodule");
import { date } from './mymodule.js'

console.log("Welcome to Node JS");

function main() {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var car = JSON.stringify({
            title: "Ford",
            year: "2022"
        });
        // res.write("The current date and time is: " + date.currentDateTime());
        res.write("The current date and time is: " + date());
        res.write("\n" + car)
        res.end();
    }).listen(3000);
}
main()
