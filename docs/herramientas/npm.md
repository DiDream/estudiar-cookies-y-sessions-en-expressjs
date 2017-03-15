### ¿Qué es npm?
_Node Package Manager_ es un **gestor de paquetes de NodeJS**, que nos permite descargar librerías y enlazarlas o descargar programas de js. Gracias a él, tenemos casi cualquier librería disponible a tan solo una linea de comando de distancia, permitiéndonos utilizarla en cuestión de segundos. Su instalación se realiza al [instalar NodeJS](nodejs.md).

[Introducción a npm](http://cronopio.github.io/slides-intro-npm)

### Instalaciones de herramientas con npm

A continuación instalaremos dos herramientas muy útiles para la creación de documentación de nuestros proyectos usando sólo markdown.
* #### gitbook-cli
Interfaz por línea de comandos de [Gitbook](gitbook.md). Su instalación se realiza con el siguiente comando:

    ```bash
    $ npm install -g gitbook-cli
    ```

    La opción _-g_ hace referencia a que se instalará de forma global.

    [Documentación gitbook-cli](https://www.npmjs.com/package/gitbook-cli).

    Usaremos esta librería para generar los ficheros .html y .css a partir de los ficheros .md que los almacenará en el directorio _\_book_.

* #### gh-pages
Librería de NodeJS muy útil para automatizar el trabajo de actualizar la rama _gh-pages_ de nuestro repositorio, cuando lo usamos junto a _gitbook-cli_. Para su instalación debemos ejecutar el comando:
    ```bash
    $ npm install gh-pages --save-dev
    ```
    La opción _--save-dev_ hace referencia a que el paquete se instalará como dependencia de desarrollo.

    [Documentación de gh-pages](https://www.npmjs.com/package/gh-pages).
