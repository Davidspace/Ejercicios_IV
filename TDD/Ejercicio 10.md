# Configuración de Travis para mi aplicación

En el anterior ejercicio me dí de alta en Travis y activé el repositorio en el que se va a aplicar la integración continua. El último paso que debo de dar es crear un fichero de configuración con las directrices para Travis y añadirlo al repositorio.

## Creación del fichero de configuración .travis.yml

Este fichero escrito en YAML contiene las siguientes partes:

- **language:** Indica qué lenguaje se va a usar. En mi caso se trata de Node.js.

- **node_js:** En este caso se indican las versiones que voy a probar. Podemos indicar varias de ellas.

- **before_install:** Conjunto de comandos que van a ser ejecutados antes de la instalación de la aplicación.

- **script:** Finalmente, se indican los comandos que ejecutará Travis. En mi caso será correr los tests dentro del contenedor.

En mi caso no será necesario especificar ni el lenguaje que utilizaré ni las versiones del mismo, ya que los tests se ejecutarán dentro de mi contenedor Docker, el cual dispone de toda la información necesaria. 
Sin embargo, si no especifico ningún lenguaje, Travis tomará **Ruby** por defecto e intentará llevar a cabo la instalación de Bundle. Dado que este comportamiento no lo necesito y consume recursos de manera innecesaria, añadiré en el campo **language** el valor **minimal**, que se trata de una imagen que no está enfocada en ningún lenguaje en particular, por lo que no habrá comandos de instalación o scripts por defecto que no aporten nada.

Descrita la estructura del fichero de configuración, procedo a crear el mio propio, en el cual directamente utilizo la orden **docker run** para ejecutar dentro del contenedor los tests. El uso de esta orden lleva a cabo implícitamente el **pull** de la imagen desde Docker Hub. Además, utilizo la variable de Travis **$TRAVIS_BUILD_DIR** para indicar la ruta del directorio en el que Travis ha llevado a cabo el build, que en mi caso se trata del directorio raiz de mi repositorio.

### .travis.yml

```
language:
  - minimal

script:
  - docker run -t -v $TRAVIS\_BUILD\_DIR:/test davidspace/aroundtheworld
```

### Build exitoso

![Build](https://github.com/Davidspace/Ejercicios_IV/blob/main/TDD/imagenes/travis6.png)

![Log del build](https://github.com/Davidspace/Ejercicios_IV/blob/main/TDD/imagenes/travis7.png)
