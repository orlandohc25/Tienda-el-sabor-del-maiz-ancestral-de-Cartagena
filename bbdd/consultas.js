/* function obtenerProductos(categoria = "") {
  let lista_filtrada = [];
  for (let i = 0; i < lista_productos.length; i++) {    
    if (categoria === "" || lista_productos[i].categoria === categoria) {
      lista_filtrada.push(lista_productos[i]);
    }
  }
  return lista_filtrada;
} */

function obtenerProductosServicios(categoria = "") {
  /*
    let lista_filtrada = [];
    for (let int i = 0; i < lista_cursos.length; i++) {
        if (lista_cursos[i].categoria === categoria) {
            lista_filtrada.push(lista_cursos[i]);
        }
    }
    return lista_filtrada;
    */

  if (categoria === null || categoria === "") {
    return lista_productos;
  } else {
    let lista_filtrada = lista_productos.filter(
      (producto) => producto.codigo_categoria === categoria
    );
    return lista_filtrada;
  }
}

// Funcion que devuelve la información de un producto dado su código.
function obtenerProductoServicioPorCodigo(codigo) {
  /*
    for (let i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].codigo === codigo) {
            return lista_productos[i];
        }
    }
    return null;
    */
  return lista_productos.find((producto) => producto.codigo === codigo);
}

// Funciones relacionadas con el carrito de compras.
function mostrarCarrito() {
  let etiqueta_carrito = document.getElementById("etiqueta_carrito");
  etiqueta_carrito.innerHTML = "";
  let costoTotal = 0;

  carrito = obtenerCarrito();

  carrito.forEach((elemento, posicion) => {
    let li = document.createElement("li");
    li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                    <div class="row">
                        <p class="my-0">${elemento.nombre}</p>
                        <small>${elemento.precio}</small>
                    </div>
                    <a class="btn bg-warning text-decoration-none text-dark" href="#" onclick="eliminarProductoServicio(${posicion})" >
                        <i class="fa fa-times"></i>
                    </a>
                </div>`;
    etiqueta_carrito.appendChild(li);
    costoTotal = costoTotal + elemento.precio;
  });
  let etiqueta_total = document.getElementById("etiqueta_total");
  etiqueta_total.innerText = costoTotal.toFixed(2);
}

/*let diccionario = {
  nombre: "carrito",
  items: [],
}*/

function obtenerCarrito() {
  let carrito = [];
  const str = localStorage.getItem("carrito");
  if (str) {
    carrito = JSON.parse(str);
  }
  return carrito;
}

function agregarProductoServicio(producto, mostrar = true) {
  let carrito = obtenerCarrito();
  carrito.push(producto);
  //Almacena la infoarmación del carrito en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
  if (mostrar === true) {
    mostrarCarrito();
  }
}

function eliminarProductoServicio(posicion) {
  let carrito = obtenerCarrito();
  carrito.splice(posicion, 1);
  //Almacena la infoarmación del carrito en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  //Almacena la información del carrito en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}