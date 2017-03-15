var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

//Cuando atravesemos esta ruta, se creará una cookie con un tiempo de expiración.
app.get('/cookie', (req, res)=>{
  res.cookie('prueba', 'hola, soy una cookie', {expire : new Date() + 9999}).send('Cookie creada.');
})

//Para ver si la cookie se ha creado, ejecutaremos en la consola del navegador
//document.cookie

//Si queremos saber las cookies que le envía el navegador al servidor:
app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});

//Si queremos borrar la cookie:
app.get('/clearcookie', function(req,res){
     clearCookie('prueba');
     res.send('Cookie borrada');
});

var server = app.listen(process.env.PORT || 3000, ()=>{
  var host = server.address().address;
  var port = server.address().port;

  console.log('Servidor escuchando en: http://%s:%s', host, port);
});
