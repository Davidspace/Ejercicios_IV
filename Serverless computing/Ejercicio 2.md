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

Para llevar a cabo el despliegue de esta función en Vercel 

