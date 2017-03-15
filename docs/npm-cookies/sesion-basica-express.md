# Autenticación de sesión básica en ExpressJS
La **autenticación** es el proceso de verificar que un usuario es en realidad quien dice ser. Por otro lado, la **autorización** es el proceso de determinar si un usuario tiene acceso a un recurso concreto que haya solicitado.

Veremos un ejemplo de autenticación básica en node.js (ejemplo que también estará en la carpeta `/src` de esta práctica.) Hay un middleware de enpoint de login, otro de logout, y otro que se ejecutará mediante el método POST de http, pero sólo si estamos autenticados, y nuestra identidad será verificada y guardada en sesión. Cuando lleguemos al middleware endpoint de `/logout`, entonces nuestra sesión será destruida y el servidor olvidará nuestra identidad, por lo que tendremos que volver a autenticarnos.

[Enlace al archivo auth-session.js](../../src/auth-session.js)

## Comentando el ejemplo
```js
var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
```
Este es el principio del ejemplo, donde se incluyen los módulos que vamos a usar como por ejemplo `express` y `express-session`. Luego añadimos el middleware `session` a la app.

```js
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
```
Esta es la función que se encarga de verificar que estamos autenticados. Permite ejecutar el siguiente middleware si el usuario es "amy" y tiene permisos de administrador (los cuales veremos como se atribuyen ahora cuando veamos el middleware endpoint de login).

```js
// Login endpoint
1  app.get('/login', function (req, res) {
2   if (!req.query.username || !req.query.password) {
3     res.send('login failed');    
4   } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
5     req.session.user = "amy";
6     req.session.admin = true;
7     res.send("login success!");
8   }
9 });
```
El aspecto que tendrá la URL cuando el usuario envíe el formulario que pide los datos de nombre de usuario y contraseña es el siguiente: **localhost:3000/login?username=amy&password=amyspassword**, pero al utilizar el método POST de http, las credenciales no se muestran en la URL de la barra de direcciones. Este middleware, por tanto, comprueba que se ha introducido algo en los campos del formulario (línea 2), y si no es así envía un mensaje de error. Si el usuario ha introducido datos, y estos concuerdan con las credenciales de un usuario que tiene privilegios, se autentica y se le conceden dichos privilegios (líneas 5 y 6) y a continuación se envía un mensaje de éxito (línea 7).

```js
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
```
Este es el middleware endpoint de logout. Al acceder a esta ruta, la sesión será destruida y el usuario no estará **autenticado** y no podrá acceder a los recursos hasta que se autentique de nuevo.

```js
// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
```
Middleware que provee el contenido. La función **auth** se pasa como segundo parámetro antes de que proceda a servir el contenido para el usuario, de tal forma que primero se compruebe su identidad, y si es correcta, se pasa a ejecutar el siguiente parámetro (pues se habrá llamado a la función `next()` de la función `auth` para llamar al siguiente middleware. De aquí que el orden de escritura de los middleware y del paso de los parámetros sea importante).

```js
app.listen(3000);
console.log("app running at http://localhost:3000");
```
Código que ejecuta el servidor para la aplicación, escuchando en `localhost` y en el puerto 3000.
