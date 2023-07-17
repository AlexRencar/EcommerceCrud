import { clientServices } from "../services/client-service.js";

const productos = document.querySelector("[data-productos-admin]");

//Creando la card del producto
const MostrarProductosAdmin = (id, nombre, precio, descripcion, imagen, categoria) => {
  //Creando el div que guarda todo el card
  const cardProducto = document.createElement("div");
  cardProducto.className = "producto__card__admin";
  const contenido = `
  <div class="producto__card__btn__container">
    <a class="boton-eliminar" id="${id}" href="#"><img src="../assets/img/eliminar-boton.png" alt="boton eliminar"></a>
    <a class="boton-editar" href="../screens/editar-producto.html?id=${id}"><img src="../assets/img/boton-editar.png" alt="boton editar"></a>
  </div>
  <div class="producto__card__imagen__admin" style="background-Image: url(${imagen})">
  </div>
  <h3 class="producto__card__titulo__admin">${nombre}</h3>
  <p class="producto__card__precio__admin">$ ${precio}</p>
  `
  cardProducto.innerHTML = contenido;

  const btnEliminar = cardProducto.querySelector(".boton-eliminar");

  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    Swal.fire({
      title: 'Estas seguro?',
      text: `Quieres eliminar el producto: ${nombre} ? esta accion no es revertible!`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        clientServices.eliminarProducto(id).then(respuesta => {
          console.log(respuesta);
        }).catch(error => alert("Ocurrio un error al momento de eliminar"))
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El producto ha sido eliminado',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
          const limpiarContenido = ``;
          productos.innerHTML = limpiarContenido;
          imprimirProductos();
        },1700);
      }
    })
  })

  return cardProducto;
}

//Capturando la seccion para mostrar los productos
const productosAdmin = document.querySelector("[data-productos-admin]");

const imprimirProductos = () => {
  //Recorrer los datos traidos del JSON
  clientServices.listaProductos().then(data => {
    data.forEach(({id, nombre, precio, descripcion, imagen, categoria}) => {
      //Imprimir datos en el index
      const nuevoProducto = MostrarProductosAdmin(id, nombre, precio, descripcion, imagen, categoria);
      productosAdmin.appendChild(nuevoProducto);
    });
  }).catch(error => alert("ocurrio un error"));
}
imprimirProductos();


export const adminControler = {
  MostrarProductosAdmin
}