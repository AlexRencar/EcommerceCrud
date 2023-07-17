import { clientServices } from "../services/client-service.js";
import { MostrarProductos } from "./mostrar.productos.controller.js";

//Capturando la seccion de productos star wars
const productosStarWars = document.querySelector("[data-star-wars]");
//Capturando la seccion de consolas
const productosConsolas = document.querySelector("[data-consolas]");
//Capturando la seccion de Diversos
const productosDiversos = document.querySelector("[data-diversos]");

//Recorrer los datos traidos del JSON
clientServices.listaProductos().then(data => {
  data.forEach(({id, nombre, precio, descripcion, imagen, categoria}) => {
    //Imprimir datos en el index, agregando el html correspondiente
    if(categoria === "Star wars"){
      const nuevoProducto = MostrarProductos(id, nombre, precio, descripcion, imagen, categoria);
      productosStarWars.appendChild(nuevoProducto);
    }else if(categoria === "Consolas"){
      const nuevoProducto = MostrarProductos(id, nombre, precio, descripcion, imagen, categoria);
      productosConsolas.appendChild(nuevoProducto);
    }else if(categoria === "Diversos"){
      const nuevoProducto = MostrarProductos(id, nombre, precio, descripcion, imagen, categoria);
      productosDiversos.appendChild(nuevoProducto);
    }
  });
})



