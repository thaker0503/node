var express = require('express');
const fs = require('fs');
var app = express();
var path = require('path');
const cors = require('cors');
var PORT = 3001;
const { v4: uuidv4 } = require('uuid');
var id = uuidv4();
var todos = require('./db.json');
console.log(todos)

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))

var whitelist = ['http://localhost:5502']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json(todos);
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    var index = todos.findIndex(item => item.id == id);
    res.json(todos[index])
});

app.post('/', (req, res) => {
    try {
        req.body['id'] = id;
        todos.push(req.body)
        fs.writeFile('db.json', JSON.stringify(todos), { flag: 'w+' }, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Successfully Added")
        });
        res.end();
    } catch (error) {
        console.log(error.message);
    }
});

app.put('/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.map(item => {
        if (item.id == id) {
            req.body['id'] = id
            return req.body
        } else {
            return item
        }

    });
    fs.writeFile('db.json', JSON.stringify(todos), { flag: 'w+' }, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Successfully Added")
    });
    res.end();
});

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    var index = todos.findIndex(item => item.id == id);
    todos.splice(index, 1);
    fs.writeFile('db.json', JSON.stringify(todos), { flag: 'w+' }, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Successfully Added")
    });
    res.end();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});