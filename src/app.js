'use strict'
var
    express = require('express'),
    cookieParser = require('cookie-parser'),
    util = require('util'),

    app = express(),
    port = process.env.PORT || 3000;

app.use(cookieParser());

// Ejemplos de cookies
app.get('/get-cookie', function(req,res){
    res.cookie('newCookie', 'newCookieValue')
        .send('Cookie creado');
});
app.get('/show-cookies',(req,res)=>{
    console.log('Cookies:',util.inspect(req.cookies));
    res.send(`Cookies: ${util.inspect(req.cookies)}`);

});
app.get('/borrar-cookie',(req,res)=>{
    res.clearCookie('newCookie');
    res.send('Cookie borrada');
});

app.listen(port, (error)=>{
    if(error){
        console.error(error);
        return
    }
    console.log('Servidor corriendo en el puerto:', port);
})
