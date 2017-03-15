# Módulo de npm *cookie*

Para instalarlo, ejecutaremos:
```bash
$ npm install cookie
```

Para utilizarlo en nuestros programas de Javascript, escribiremos al inicio de todos ellos:
```js
var cookie = require('cookie');
```

## Métodos
### cookie.parse(str,options)
Parsea el encabezado de una cookie, devolviendo un objeto con todos
los pares nombre-valor que coincidan con nuestra búsqueda. Por ejemplo:
```js
var cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2');
// { foo: 'bar', equation: 'E=mc^2' }
```

### cookie.serialize(name, value, options)
Crea una cadena de texto para la cabecera de una cookie a partir de un par nombre-valor. El argumento *name* es el nombre de la cookie, el *value* es el valor de ésta, y *options* son distintas opciones que se pueden añadir.
```js
var setCookie = cookie.serialize('foo', 'bar');
// foo=bar
```
Las opciones que se pueden añadir son:
* domain: especifica un dominio para la cookie. Si no se pone ninguno, se coge por defecto el actual.

* encode: se especifica una función que se usará para codificar el valor de una cookie.

* expires: se especifica la fecha de expiración de la cookie. Si no se especifica ninguna, el navegador la destruirá al salir.

* httpOnly: atributo que se usa para la fiabilidad del sitio. Cuando el sitio sea fiable, el valor estará puesto a "verdadero", mientras que si no lo es, estará puesto a "falso". Por defecto, el valor de esta opción es "falso".

* maxAge: se especifica el número, en segundos, del valor del atributo "MaxAge". Este atributo es similar al de "expires", solo que si ambos están establecidos, entonces este tiene prioridad.

* path: especifica el valor para el atributo "path". Por defecto, el path será el "path por defecto".

* sameSite: booleano o string que especifica el valor del atributo Same-Site de la cookie.

* secure: booleano que indica si un sitio es seguro mediante el valor *true*, o si no lo es mediante el valor *false*, que a su vez es el valor por defecto si no se especifica nada.
