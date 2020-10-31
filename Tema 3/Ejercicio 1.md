# Ejercicio 1. Instalación de Docker.

## Pasos para la instalación

El proceso de instalación de Docker es bastante sencillo. A continuación enumeraré los pasos que se han de dar para ello (Ubuntu 16.04):

1. Actualizamos el sistema para que se sea más seguro y confiable para la instalación de Docker mediante los comandos `sudo apt update` y `sudo apt upgrade`. 

2. Instalamos el paquete de requisitos previos a la propia instalación de Docker. Lo haremos mediante un solo comando: `sudo apt-get install  curl apt-transport-https ca-certificates software-properties-common`

3. Agregamos los repositorios de Docker, con lo que facilitaremos el proceso de instalación y utilizaremos el método de instalación oficialmente compatible. Primero, agregamos la clave GPG mediante `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`. A continuación, agregamos el repositorio: `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`. Después de eso, actualizamos la información del repositorio: `sudo apt update`.

4. Por último, usamos el comando apt para instalar Docker: `sudo apt install docker-ce`

5. Comprobamos el estado del servicio mediante `sudo systemctl status docker`

[!Estado del servicio Docker]()

6. Usaremos la imagen de prueba para verificar que todo funciona como debería. Lo haremos con el siguiente comando: `sudo docker run hello-world`

[!Hello world]()
