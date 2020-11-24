# Despliegues de una función de prueba

Voy a realizar a cabo un despliegue de una función ejemplo que he encontrado en la [documentación de Netlify](https://functions-playground.netlify.app/). La función en cuestión es el inevitable ejemplo de Hello World:

```
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World. It's me!"
  };
};
```

Esta función es asíncrona, de modo que podemos simplemente devolver la respuesta en lugar de tener que utilizar callbacks. Además, tiene dos parámetros: el evento que ha provocado la llamada a la función y el contexto de la llamada. En esta ocasión simplemente queremos devolver una respuesta cuyo código de estado será 200, que indica que todo ha ido bien, y que en su cuerpo tendrá el mensaje "Hello, World. It's me!".

Para llevar a cabo el despliegue de esta función en Netlify en primer lugar crearé un directorio **api** en mi [repositorio para pruebas de Netlify](https://github.com/Davidspace/Pruebas_Netlify) y dentro de él incluiré el fichero **index.js** que contendrá la función expuesta. A continuación, simplemente tengo que hacer push al repositorio de los cambios llevados a cabo, lo cuál activará el despliegue automático de Netlify.

![Despligue en Netlify](https://github.com/Davidspace/Ejercicios_IV/blob/main/Serverless%20computing/imagenes/deployed-netlify.png)

Puede ver el correcto funcionamiento de la función clickando [aquí](https://pruebasnetlify.netlify.app/.netlify/functions/index)
