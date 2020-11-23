# Dada de alta en Vercel y Firebase y descarga de SDKs

## Vercel

Vercel es una empresa que ofrece en su servicio en el cloud la posibilidad de trabajar con serverless computing. Esta ofrece una serie limitada de runtimes, que ejecutan diferentes lenguajes de programación, pero no todos, por lo que también cuenta con un tier gratuito bastante amplio, con alrededor de un millón de invocaciones. Además, también ofrece herramientas específicas tanto para desplegar como para testear localmente los despliegues.

### Dada de alta

1. En primer lugar elegimos la plataforma con la que enlazaremos Vercel

![Elegir plataforma](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/vercel1.png)

2. Accedemos al proceso de importación de mi repositorio en GitHub

![Importar repositorio de Git](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/vercel2.png)

3. Facilito la URL del repositorio que quiero importar. En este caso he creado un repositorio para llevar a cabo pruebas en él

![Añado URL de mi repositorio de Git](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/vercel3.png)

4. Selecciono el directorio en el que quiero llevar a cabo dicha instalación, es decir, el directorio raíz de mi repositorio

![Selección del directorio raíz de mi repositorio](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/vercel4.png)

5. Elijo el nombre del proyecto y llevo a cabo el despliegue.

![Nombre del proyecto y despliegue](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/vercel5.png)


## Firebase

Firebase es una plataforma desarrollada por Google que da numerosas herramientas al usuario para llevar a cabo la creación de aplicaciones web.

### Dada de alta

Ya me encontraba dado de alta en Firebase debido a que basta con contar con una cuenta de Google, por lo que lo único que debemos de hacer es conectarnos a ella.

![Cuenta de Google conectada](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/firebase1.png)

## Trabajar de manera local con ambos sistemas

Para trabajar tanto con Vercel como con Firebase de manera local será necesario la descarga de un SDK (Software development kit).

Para Vercel utilizaré Vercel CLI. Lo descargo e instalo de la siguiente manera:

`npm i -g vercel`

Lo pondremos en funcionamiento ejecutando el comando **vercel**. Una vez logueados mediante nuestro e-mail y confirmado el posterior correo de confirmación, ejecutamos nuevamente **vercel**. A continuación, se nos indica que para desplegar para producción simplemente debemos ejecutar el comando **vercel --prod**.

![Vercel CLI funcionando](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/vercel6.png)


Para llevar a cabo la descarga del SDK de Firebase, Firebase CLI, ejecutaré el siguiente comando:

`curl -sL https://firebase.tools | bash`

Para acceder al mismo ejecutamos **firebase login**, con lo que conectaremos nuestro PC a Firebase, pudiendo acceder a los proyectos almacenados en la plataforma de manera local.

![Firebase conectado](https://github.com/Davidspace/Ejercicios_IV/blob/main/%20Serverless%20computing/imagenes/firebase2.png)
