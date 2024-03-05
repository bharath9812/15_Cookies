

const express = require('express');
const app = express();



app.get('/greet', (req, res) => {
    res.send('hey ');
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Suki');
    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
    res.send('Cookie sent');
})

app.listen(3000, () => {
    console.log('workin at 3000 boss')
})