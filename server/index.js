require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const ctrl = require('./controller');

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }

}).then(db => {
    app.set('db', db)
    console.log('connected to db')
}).catch(err => console.log(err))

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.get('/api/posts/:id', ctrl.getPosts)


app.listen(SERVER_PORT, console.log('Port is running on ' + SERVER_PORT));