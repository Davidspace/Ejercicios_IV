const { Etcd3 } = require('etcd3');
const client = new Etcd3();
 
(async () => {
  const clave = await client.get('clave').string();
  console.log('El valor de la clave almacenada es: ', clave);
 
  await client.delete().all();
})();
