# Configuración de Travis para mi aplicación

En el anterior ejercicio me dí de alta en Travis y activé el repositorio en el que se va a aplicar la integración continua. El último paso que debo de dar es crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

## Creación del fichero de configuración .travis.yml

Este fichero escrito en YAML contiene las siguientes partes:

- language: Indica qué lenguaje se va a usar. En mi caso se trata de Node.js.

- node_js: En este caso se indican las versiones que voy a probar. Podemos indicar varias de ellas.

- before_install: Conjunto de comandos que van a ser ejecutados antes de la instalación de la aplicación.

- script: Finalmente, se indican los comandos que ejecutará Travis. En mi caso será correr los tests dentro del contenedor.

En mi caso no será necesario especificar ni el lenguaje que utilizaré ni las versiones del mismo, ya que los tests se ejecutarán dentro de mi contenedor Docker, el cual dispone de toda la información necesaria.

Descrita la estructura del fichero de configuración, procedo a crear el mio propio, en el cual construyo un contenedor a partir de la imagen generada por el Dockerfile de mi repositorio y ejecuto en él los tests que se hallan en el directorio /test.

### .travis.yml

```
before_install:
  docker build -t davidspace/aroundtheworld .

script:
  docker run -t -v `pwd`:/test davidspace/aroundtheworld
```
