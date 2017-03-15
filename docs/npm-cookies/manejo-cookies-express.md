# Manejo de cookies en ExpressJS
Para manejar las cookies en Express, podemos usar otro módulo, aparte del que hemos hablado anteriormente, llamado *cookie-parser*. Para ello, primero hemos de instalarlo en nuestra aplicación:
```bash
$ npm install --save cookie-parser
```
Tras esto, si queremos utilizarlo en nuestra aplicación, tendremos que incluirlo:
```js
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
```

## Sintaxis
Cookie-parser parsea la cabecera de la cookie y rellena *req.cookies* con un objeto indexado por el nombre de las cookies. Para establecer una nueva cookie, definamos una ruta en nuestra app Express de esta forma:
```js
app.get('/cookie',function(req, res){
     res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});
```
Si queremos comprobar que la cookie se ha creado con éxito, basta con ejecutar en la consola de nuestro navegador:
> document.cookie

El navegador manda de vuelta la cookie al servidor cada vez que hace una solicitud nueva. Y para obtener la cookie que el navegador va a enviar adjuntándola a la cabecera de la solicitud, podemos escribir:
```js
app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});
```

## Establecer el tiempo de expiración de una cookie
Se puede hacer fácilmente mediante:
```js
res.cookie(name , 'value', {expire : new Date() + 9999});
```
Como vimos en el capítulo del módulo cookie, podemos pasarle opciones mediante un objeto, usando propiedades que tengan el nombre del atributo. En este caso, la porpiedad *expire* toma el valor del objeto *Date* creado, y se le suma 9999. Como alternativa, se puede usar la propiedad opcional **magAge**.
```js
res.cookie(name, 'value', {maxAge : 9999});
```

## Borrar una cookie existente
Se puede hacer fácilmente utilizando el método **clearCookie** que requiere del nombre de la cookie que se desee eliminar.
```js
app.get('/clearcookie', function(req,res){
     clearCookie('cookie_name');
     res.send('Cookie deleted');
});
```
De esta forma, si accedemos a la ruta "/clearcookie", se ejecutará el middleware que borra la cookie e imprime que la cookie se ha borrado. Si lo queremos comprobar más exhaustivamente, en la consola de nuestro navegador, volvemos a ejecutar:

> document.cookie

y veremos que la cookie ya no está.
