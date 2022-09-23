var express = require('express');
const fs = require('fs');
var app = express();
var path = require('path');
const cors = require('cors');
var PORT = 3001;
const { v4: uuidv4 } = require('uuid');
var id = uuidv4();
var todos = require('./db.json');
// const { resolveMx } = require('dns');
// const { resolveInclude } = require('ejs');
console.log(todos)

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.set('view engine', 'ejs');

var whitelist = ['http://localhost:5500', 'http://127.0.0.1:5500']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))

app.get('/api/', (req, res) => {
    res.status(200).json(todos)
});

app.get('/', (req, res) => {
    res.render('home.ejs', {
        data: todos
    });
})

app.get('/api/:id', (req, res) => {
    const { id } = req.params;
    let index = todos.findIndex(item => item.id == id);
    res.json(todos[index])
});

app.post('/api/', (req, res) => {
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
        res.status(201).json(todos);
    } catch (error) {
        console.log(error.message);
    }
});

app.put('/api/:id', (req, res) => {
    const { id } = req.params;
    let index = todos.findIndex(item => item.id == id);
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
    res.json(todos[index]);
});

app.delete('/api/:id', (req, res) => {
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

// module.exports = app;