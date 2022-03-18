const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(port, () => console.log('♥ running with love'))