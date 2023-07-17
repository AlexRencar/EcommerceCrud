//Conexion
const listaProductos = () => fetch('https://64adc50cb470006a5ec6624c.mockapi.io/productos').then(respuesta => respuesta.json());

const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
  return fetch('https://64adc50cb470006a5ec6624c.mockapi.io/productos', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id: uuid.v4(), nombre, precio, imagen, categoria, descripcion})
  });
};

const eliminarProducto = (id) => {
  return fetch(`https://64adc50cb470006a5ec6624c.mockapi.io/productos/${id}`, {
    method: "DELETE"
  });
};

//Detalles del producto por ID
const detalleProducto = async (id) => {
  return fetch(`https://64adc50cb470006a5ec6624c.mockapi.io/productos/${id}`).then( respuesta => respuesta.json());
};

const actualizarProducto = (id, nombre, precio, descripcion, imagen, categoria) => {
  return fetch(`https://64adc50cb470006a5ec6624c.mockapi.io/productos/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id, nombre, precio, imagen, categoria, descripcion})
  }).then(respuesta => respuesta).catch(error => console.log(error));
};

export const clientServices = {
  listaProductos,
  detalleProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto

};



