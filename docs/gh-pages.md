###Github Pages

Github Pages es un servicio que ofrece Github para publicar paginas web de una forma sencilla.
Tenemos dos alternativas para crear una pagina web con esta herramienta.

 1. ##### Páginas de usuario u organización
 Es necesario crear un repositorio especial donde se va a almacenar todos el contenido del sitio web. El nombre del repositorio debe seguir el siguiente formado **_username_.github.io**, donde _username_ se refiere al nombre de usuario (o de organización) de nuestra cuenta en Github, de forma que la URL para acceder a la pagina web seria el propio nombre de repositorio. Todos los ficheros que se visualizaran deberán estar en la rama _master_.

 2. ##### Páginas de proyecto o repositorio
 A diferencia de las anteriores están asociada a cualquier repositorio que tengamos en Github. En este caso los ficheros que se van a publicar deben estar en una rama huérfana del proyecto llamada _gh-pages_. La URL de acceso al sitio será **_username_.github.io/_nombre de repositorio_**.

 * ##### 
 Es posible cambiar la rama destinada a almacenar la información de nuestra página del proyecto. Para ello, situados en nuestro repositorio del proyecto, nos iremos a la pestaña "Settings". Una vez ahí, haremos scroll hacia abajo y veremos algo así:

 	![Cambiar la rama](/markdown/img/cambiar_rama.png)

 Al hacer click en el desplegable, podremos ver las distintas opciones de las que disponemos, pudiendo elegir una nueva rama para alojar nuestro sitio:

 	![Desplegable](/markdown/img/desplegable.png)

La última opción nos permite usar un directorio llamado "docs" para alojar todos los archivos de nuestro sitio, para asi poder tenerlos separados de nuestro código fuente de la librería, aplicación, etc.

 ___
