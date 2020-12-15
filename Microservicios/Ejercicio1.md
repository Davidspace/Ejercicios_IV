# Instalación y uso de etcd3 y etcdctl

En este ejercicio llevaré a cabo la instalación del servidor de configuración distribuida **etcd3**, averiguaré qué bibliotecas funcionan bien con el lenguaje que estoy utilizando en mi proyecto (Node) y llevaré a cabo un pequeño ejemplo de almacenamiento y recuperación de una clave utilizando **etcdctl**, la herramienta de línea de comando usada para interactuar con el servidor de etcd3.

## Instalación de etcd3 y etcdctl

Para llevar a cabo la instalación de ambas herramientas he llevado a cabo los siguientes [pasos](https://computingforgeeks.com/how-to-install-etcd-on-ubuntu-18-04-ubuntu-16-04/)

## Bibliotecas

En la [documentación de ectd](https://etcd.io/docs/v3.3.12/integrations/) encontramos las bibliotecas existentes para cada uno de los lenguajes de programación soportados. En mi caso utilizo Node, y dado que [mixer](https://github.com/microsoft/etcd3) es la única de entre las existentes para este lenguaje de programación que soporta la versión 3, esta será la más apropiada.

## Ejemplo de almacenamiento

En este [fichero]() se encuentra el programa de ejemplo que he utilizado, en el cual se recupera una clave previamente establecida.

Para establecer dicha clave desde la línea de órdenes con **etcdctl** debemos ejecutar los siguientes comandos: `export ETCDTCL_API=3` y `/usr/local/bin/etcdctl put clave ejercicio1`
