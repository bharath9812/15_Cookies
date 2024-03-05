// npm i cookie-parser

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser('skybison')); // skybison is secretkey/lock/encryptor to sign the cookie

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

// singing cookies : to validate the cookies that they are tampered with info it contains,
// and confirm legitimacy of the cookie
// to verify the integrity of that cookie : signed cookies are used
app.get('/signed', (req, res) => {
    res.cookie('show', 'avatar', { signed: true });
    res.send('cookie/movie is signed');
})


//

app.get('/verify', (req, res) => {
    // res.send(req.cookies); // this will not have singed cookies
    res.send(req.signedCookies);
})
app.listen(3000, () => {
    console.log('workin at 3000 boss')
})