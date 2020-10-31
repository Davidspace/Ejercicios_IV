# Ejercicio 2. Instalación de una imagen alternativa de Ubuntu y una de CentOS.

## Proceso de instalación.

Para llevar a cabo la instalación de una imagen alternativa de Ubuntu llevaremos a cabo los siguientes pasos:

1. Crearemos una cuenta en Docker Hub, un servicio proporcionado por Docker en el que la comunidad comparte sus imagenes, las cuales pueden ser descargadas y utilizadas por el resto. Para ello, nos dirigiremos a su página web y nos registraremos. 

[!Registro en Docker Hub]

2. Una vez nos hayamos registrado, procederemos a loguearnos desde la terminal. Para ello utilizaremos el comando `docker login`. Tras su ejecución, nos requerirá nuestro nombre de usuario y nuestra contraseña. Tras introducirlos, ya estaremos dentro de nuestra cuenta.

3. Una vez llevado a cabo el logueo seremos capaces de descargar imágenes que la comunidad haya publicado en la plataforma. Como en nuestro caso queremos obtener una imagen de Ubuntu, nos dirigimos al buscador, introduciremos **Ubuntu** y seleccionamos la primera opción.

[!Búsqueda de Ubuntu]()

4. Dicha selección nos dirigirá al repositorio oficial de **Ubuntu**, en el que podemos observar una descripción de las imágenes que mantienen y otra información de interés. En la pestaña llamada **Tags** encontramos todas las diferentes imágenes que la comunidad ha subido a dicho repositorio. Como buscamos una imagen alternativa a la nuestra, elegiremos, por ejemplo, **20.04**. A la derecha observamos el comando que debemos de introducir para su descarga. En nuestro caso se trata de `docker pull ubuntu:20.04`.

[!Comando para la descarga]()

5. Una vez ejecutado el comando tendremos la imagen en nuestro equipo. Listamos las imágenes disponibles con `docker images`.

[!Listado de imágenes]()

6. Para crear un contenedor con la imagen obtenida y ejecutar en él cualquier comando, ejecutamos el comando `docker run ubuntu:20.04 comando`
