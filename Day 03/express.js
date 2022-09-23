const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
var users = [];

// app.get('/', (req, res) => {
//     res.status(200);
//     res.send("Welcome to the root url of the server.")
// })

// app.get('/hello', (req, res) => {
//     res.status(200);
//     res.send("<h1>Hello World!</h1>")
// })

// // app.use(express.raw());

// app.post('/', (req, res) => {
//     // const { name , company ,  position  } = req.body;

//     // res.send(`Welcome ${name} to ${company} as ${position}`);
//     console.log(req.body)
//     res.end();
// })

// // app.use("/:user/todos/static", express.static(path.join(__dirname, 'Static Files')));

// app.get("/:user/todos/static/", (req, res) => {
//     res.sendFile(path.join(__dirname, './Static Files/index.html'));
// })

// app.get("/:user/todos/", (req, res) => {
//     const { user } = req.params;
//     res.status(200).json({
//         "user": user
//     })
// })

var router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Router Working");
    res.end();
})

app.use(router);

app.listen(PORT, (error) => {
    if (!error){
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    } else {
        console.log("Error occurred, server can't start", error);
    }
})