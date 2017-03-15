# Creando cookies

Desde el servidor, las cookies son creadas mediante la cabecera de respuesta `HTTP Set-Cookie`:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```
Una respuesta HTTP puede contener múltiples cabeceras `Set-Cookie`, una por cada cookie.

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: colorPreference=blue
Set-Cookie: id=48745487
```
Una vez que la cookie ha sido creada, cada nueva solicitud que realice el usuario enviará la cookie en la cabecera de solicitud `HTTP Cookie`. En esta cabecera sólo se envían las cookies que sean válidas según los parámetros establecidos al crearla (expires, path ...) y sólo se envían el par `<nombre>=<valor>`:

```http
Cookie: <nombre>=<valor>
```

Cuándo se envían varias cookies, se envían todas separadas por **;** en una única cabecera `Cookie`.

```http
GET /ejemplo.html HTTP/1.1
Host: www.mysite.com
Cookie: colorPreference=blue; sessionToken=48745487
```

#### Cookies de sesión

Los ejemplos anteriores son cookies de sesión. No se especifica el campo `Expires` ni `Max-Age` y se borran cuando el usuario cierra el navegador Web.

#### Cookies persistentes

Se borran en la fecha establecida en el campo `Expires` o pasado el tiempo indicado en el campo `Max-Age`.

```http
Set-Cookie: sessionToken=48745487; Expires=Thu, 01 Jan 2031 19:22:10 GMT
```

#### Alcance de las cookies

El campo `Domain` y `Path` define el alcance de la cookie, que es el conjunto de direcciones URL a la cual se enviará la cookie.

`Domain` especifica los hosts a los que se enviará la cookie. Si no se especifica, por defecto, las cookies sólo serán válidas para el subdominio actual.
Pero si el atributo domain no está vacío, podemos especificar otros subdominios ya sea de forma específica:

```http
Domain=sub.ejemplo.com
```

o para todos los subdominios:

```http
Domain=mozilla.org
```

`Path` Establece la ruta para la cuál la cookie es válida. Por defecto, si no se especifica ningun valor, una cookie solo es valida para el path actual. Por el contrario, si se especificase la cookie seria valida para todas las rutas a partir del path especificado.

Por ejemplo si `Path=/docs`, serán válidos:

* `/docs`
* `/docs/Web/`
* `/docs/Web/HTTP`
