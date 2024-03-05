// npm i cookie-parser

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'No=name' } = req.cookies;
    res.send(`Hey ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Suki');
    // res.cookie('avatar', 'Kyoshi', { maxAge: 900000, httpOnly: true })
    res.cookie('avatar','kyoshi')
    res.send('Cookie sent');
})

app.listen(3000, () => {
    console.log('workin at 3000 boss')
})