# Configuración de Travis para mi aplicación

En el anterior ejercicio me dí de alta en Travis y activé el repositorio en el que se va a aplicar la integración continua. El último paso que debo de dar es crear un fichero de configuración con las directrices para que Travis ejecute los tests en el contenedor Docker y añadirlo al repositorio.

## Creación del fichero de configuración .travis.yml y justificación de su contenido

Este fichero escrito en YAML suele contener las siguientes partes:

- **language:** Indica qué lenguaje se va a usar. En mi caso se trata de Node.js.

- **node_js:** En este caso se indican las versiones que voy a probar. Podemos indicar varias de ellas.

- **before_install:** Conjunto de comandos que van a ser ejecutados antes de la instalación de la aplicación.

- **install:** Comandos que llevan a cabo la instalación de la aplicación.

- **script:** Finalmente, se indican los comandos que ejecutará Travis. En mi caso será correr los tests dentro del contenedor.

Sin embargo, podemos observar que, en vista de la utilización del contenedor como entorno de ejecución de los tests, proporcionar la información sobre el lenguaje utilizado junto a sus versiones resulta redundante, ya que dentro del propio contenedor han sido instaladas todas las dependencias necesarias que el proyecto necesita para su correcto funcionamiento, entre las cuales se incluye el lenguaje junto a sus versiones y el task runner.

Dado esto, en Travis se nos abre la posibilidad de prescindir de dar esta información. Sin embargo, ante la falta de la especificación de un lenguaje determinado, Travis toma Ruby como lenguaje por defecto. Es aqui cuando, tras una breve búsqueda por la documentación, he encontrado una opción que casa perfectamente con mis necesidades actuales: el uso de la imagen **minimal**. Esta imagen no está enfocada en ningún lenguaje en particular, por lo que no se ejecutarán comandos de instalación o scripts por defecto propios de un lenguaje determinado que no aporten nada en el contexto actual debido a la situación expuesta. Esto me permite reducir los recursos necesarios para poner en funcionamiento la integración continua en mi proyecto.

Descrita la estructura del fichero de configuración que utilizaré, procedo a crear el mio propio, en el cual directamente utilizo la orden **docker run** para ejecutar dentro del contenedor los tests. El uso de esta orden lleva a cabo implícitamente el **pull** de la imagen desde Docker Hub, por lo que no es necesario su uso de manera explícita anterior a la ejecución del propio contenedor. Además, utilizo la variable de Travis **$TRAVIS_BUILD_DIR** para indicar la ruta del directorio en el que Travis ha llevado a cabo el build, que en mi caso se trata del directorio raiz de mi repositorio.

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
