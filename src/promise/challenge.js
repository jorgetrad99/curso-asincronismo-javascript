import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

/* fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
  })
  .then(() => {
    console.log('Hola');
  })
  .catch((error) => console.log(error)); */

/* fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`); // solo se quiere mostrar el primer elemento de la primera solicitud
  })
  .then((response) => response.json()) //se vuelve traer la data
  .then((product) => {
    console.log(products.title);
    return fetchData(`${API}/categories/${product.category.id}`); //se quiere mostrar la categoria de un producto en particular
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err)) //detectar un error
  .finally(() => console.log('Finally')); //es opcional para mostrar que se terminó la solicitud
 */
fetch(`${API}/products`)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log('Everything good'));
