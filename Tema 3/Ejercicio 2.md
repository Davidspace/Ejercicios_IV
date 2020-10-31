# Ejercicio 2. Instalación de una imagen alternativa de Ubuntu y una de CentOS.

## Proceso de instalación.

Para llevar a cabo la instalación de una imagen alternativa de Ubuntu llevaremos a cabo los siguientes pasos:

1. Crearemos una cuenta en Docker Hub, un servicio proporcionado por Docker en el que la comunidad comparte sus imagenes, las cuales pueden ser descargadas y utilizadas por el resto. Para ello, nos dirigiremos a su página web y nos registraremos. 

![Registro en Docker Hub](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/docker_hub_login.png)

2. Una vez nos hayamos registrado, procederemos a loguearnos desde la terminal. Para ello utilizaremos el comando `docker login`. Tras su ejecución, nos requerirá nuestro nombre de usuario y nuestra contraseña. Tras introducirlos, ya estaremos dentro de nuestra cuenta.

![Login desde la terminal](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/docker_hub_login_terminal.png)

3. Una vez llevado a cabo el logueo seremos capaces de descargar imágenes que la comunidad haya publicado en la plataforma. Como en nuestro caso queremos obtener una imagen de Ubuntu, nos dirigimos al buscador, introduciremos **Ubuntu** y seleccionamos la primera opción.

![Búsqueda de Ubuntu](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/busqueda_ubuntu.png)

4. Dicha selección nos dirigirá al repositorio oficial de **Ubuntu**, en el que podemos observar una descripción de las imágenes que mantienen y otra información de interés. En la pestaña llamada **Tags** encontramos todas las diferentes imágenes que la comunidad ha subido a dicho repositorio. Como buscamos una imagen alternativa a la nuestra, elegiremos, por ejemplo, **20.04**. A la derecha observamos el comando que debemos de introducir para su descarga e instalación. En nuestro caso se trata de `docker pull ubuntu:20.04`.

![Comando para la descarga](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/descarga_imagen_ubuntu.png)

5. Una vez ejecutado el comando tendremos la imagen en nuestro equipo. Listamos las imágenes disponibles con `docker images`.

![Listado de imágenes](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/listado_imagenes.png)

6. Para crear un contenedor con la imagen obtenida y ejecutar en él cualquier comando, ejecutamos el comando `docker run ubuntu:20.04 comando`

![Creación del contenedor](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/creacion_contenedor_ubuntu.png)

7. Seguiremos el mismo proceso para obtener una imagen base de **CentOS** y crear un contenedor a partir de ella. Buscaremos CentOS en Docker Hub, elegiremos la imagen que deseemos, introduciremos el comando `docker pull` junto al nombre de dicha imagen y crearemos un contenedor a partir de ella mediante el comando `docker run`

![Imagen CentOS](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/imagen_centos.png)

![Pull a la imagen](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/descarga_imagen_centos.png)

![Creación del contenedor](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/creacion_contenedor_centos.png)

8. Actuamos de igual forma con la imagen que incluya MongoDB.

![Imagen MongoDB](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/imagen_MongoDB.png)

![Pull a la imagen](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/descarga_imagen_MongoDB.png)

![Creación del contenedor](https://github.com/Davidspace/Ejercicios_IV/blob/main/Tema%203/imagenes/creacion_contenedor_MongoDB.png)


