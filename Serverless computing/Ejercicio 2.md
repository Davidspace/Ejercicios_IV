# Despliegues de una función de prueba

Voy a realizar a cabo un despliegue de una función ejemplo que he encontrado en la [documentación de Vercel](https://vercel.com/docs/serverless-functions/introduction). La función en cuestión es la siguiente:

```
module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}
```

Esta función recibe un objeto `req` (request) con información de distinto tipo. A continuación se llama a la función `json` con la que cuenta el objeto `res` (response) y que viene especificada [aquí](https://vercel.com/docs/runtimes#official-runtimes/node-js/node-js-request-and-response-objects), cuyo parámetro debe de ser un objeto JSON. De este modo, se pasa como parámetro un objeto JSON con tres variables: `body`, `query` y `cookies`, las cuales contendrán información que almacenaba el objeto `req`: el **cuerpo (body)**, la **query string** y las **cookies**, respectivamente.

Para llevar a cabo el despliegue de esta función en Vercel en primer lugar crearé un directorio **api** en mi [repositorio para pruebas de Vercel](https://github.com/Davidspace/Pruebas_Vercel) y dentro de él incluiré el fichero **ejercicio2.js** que contendrá la función expuesta. A continuación, simplemente tengo que hacer push al repositorio de los cambios llevados a cabo, lo cuál activará el despliegue automático de Vercel.

![Despligue en Vercel](https://github.com/Davidspace/Ejercicios_IV/blob/main/Serverless%20computing/imagenes/deployed-vercel.png)

Puede ver el correcto funcionamiento de la función clickando [aquí](https://pruebas-vercel-cjvfl00u3.vercel.app/api/ejercicio2.js?funciona=si)
