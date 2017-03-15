### Publicar página de proyecto o repositorio

Github Pages nos proporciona la posibilidad de tener una página web de nuestro proyecto lo que nos puede servir para publicar su documentación, que junto a herramientas como gitbook lo podremos obtener a base de ficheros en markdown.

#### Procedimiento

Para que Github pages funcione será necesario tener una rama huérfana denominada _gh-pages_ en nuestro repositorio, la cual contendrá los ficheros _.html_, _.css_, _.js_ que requiera la página de nuestro proyecto. Para ello ejecutaremos `$ git checkout --orphan gh-pages` dentro de nuestro repositorio local.

Si nos interesa realizar simplemente la documentación del proyecto, podemos utilizar Gitbook para obtener los ficheros en el formato necesario a partir de ficheros .md.

[Instalación de Gitbook](../herramientas/gitbook.md)

Esto lo hariamos con el comando `gitbook built` el cual nos creará los ficheros .html, .css y .js dentro del directorio _\_book_, los cuales se almacenarán en la rama _gh-pages_, para después realizar el push hacia la rama remota.
Debido a que en la rama gh-pages se almacenarán solo los ficheros .html, .css y .js y a que tras realizar `gitbook built` siempre se crearán los archivos dentro del directorio \_book. Sería una tarea tediosa el tener que reestructurar el repositorio cada vez que se suba algún cambio, para lo cual existen herramientas como el paquete _gh-pages_ que automatizan esta tarea.

[Instalación y configuración del paquete gh-pages](../herramientas/paquete-gh-pages)

La URL de la página web de nuestro proyecto sería https: //_username_.github.io/_nombre-repositorio_ donde _username_ hace referencia a nuestro nombre de usuario de Github y el _nombre-repositorio_ al nombre del repositorio de la rama _git-pages_.
