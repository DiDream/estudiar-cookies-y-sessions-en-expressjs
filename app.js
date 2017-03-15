'use strict'
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;


app.use(express.static('_book')); // directorio generado tras realizar gitbook build

app.listen(port,(error)=>{

    if(error){
        console.error(error);
        return;
    }
    console.log('Servidor corriendo en el puerto:',port);

});
