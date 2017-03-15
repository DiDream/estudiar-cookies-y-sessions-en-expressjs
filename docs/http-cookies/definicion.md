# Definción

Información enviada o recibida en las cabeceras HTTP y que queda almacenada en el navegador del usuario durante un tiempo determinado.
Se suelen utilizar principalmente para los siguientes propósitos:
* La administración de sesiones (inicios de sesión, carritos de compra)
* Personalización
* Seguimiento (análisis del comportamiento de los usuarios)

Actualmente existen mejores opciones para almacenar información localmente en el navegador del cliente (**localStorage, sessionStorage y IndexedDB**), puesto que enviar las cookies junto a cada petición genera una carga adicional en el rendimiento.

#### Caso de uso

Cuándo un usuario solicita una página web (o cualquier otro recurso), el servidor envía el documento, cierra la conexión y se olvida del usuario. Si el mismo usuario vuelve a solicitar la misma u otra página al servidor, será tratado como si fuera la primera solicitud que realiza. Esta situación puede suponer un problema en muchas situaciones y las cookies son una técnica que permite solucionarlo (de las muchas técnicas que hay).

Con las cookies, el servidor puede enviar información al usuario en las cabeceras HTTP de respuesta y esta información queda almacenada en el dispositivo del usuario. En la siguiente solicitud que realice el usuario la cookie es enviada de vuelta al servidor en las cabeceras HTTP de solicitud. En el servidor podemos leer esta información y así “recordar” al usuario e información asociada a él.
