// Lista que contiene la información de los elementos que se mostrarán en el carrusel
// de la página principal.

const elementos_carrusel = [
    {
    nombre: "Masa de maíz",
    descripcion:
      "Masa de maiz fresca y orgánica, ideal para preparar arepas, empanadas y otros platos típicos.",
    imagen: "./images/masa_maiz.jpeg",
  },
    {
    nombre: "Masa de yuca",
    descripcion:
      "Masa de yuca fresca y orgánica, ideal para preparar carimañolas, enyucados y otros platos típicos.",
    imagen: "./images/masa_yuca.jpeg"
  },
    {
    nombre: "Arepas",
    descripcion:
      "Deliciosas arepas hechas con masa de maíz, perfectas para cualquier comida.",
    imagen: "./images/arepas.jpeg",
  },
    {
    nombre: "Empanadas",
    descripcion:
      "Deliciosas empanadas rellenas de carne, pollo o queso, perfectas para cualquier ocasión.",
    imagen: "./images/empanadas.jpeg"
  },
    {
    nombre: "Carimañolas",
    descripcion:
      "Deliciosas carimañolas rellenas de carne, pollo o queso, perfectas para cualquier ocasión.",
    imagen: "./images/carimanolas.jpg"
  },
    {
      nombre: "Agua o chicha de maíz",
      descripcion:
        "Refrescante bebida tradicional hecha a base de maíz fermentado, perfecta para acompañar tus comidas.",
      imagen: "./images/agua_chicha_maiz.jpeg"
  },
    {
      nombre: "Empanadas de trigo",
      descripcion: "Deliciosas empanadas hechas con masa de trigo, rellenas de carne, pollo, jamón y queso.",
      imagen: "./images/empanadas_trigo.jpeg"
  }
];

// Lista que contiene la información de las categorías de productos disponibles en la tienda.
const lista_categorias = [
    {
    codigo: "1",
    nombre: "Masa de maíz",
    descripcion: "Masa de maíz fresca y orgánica, ideal para preparar arepas, empanadas y otros platos típicos.",
    imagen: "./images/masa_maiz.jpeg"
  },
    {
    codigo: "2",
    nombre: "Masa de yuca",
    descripcion: "Masa de yuca fresca y orgánica, ideal para preparar carimañolas, enyucados y otros platos típicos.",
    imagen: "./images/masa_yuca.jpeg"
  },
    {
    codigo: "3",
    nombre: "Arepas",
    descripcion: "Deliciosas arepas hechas con masa de maíz, perfectas para cualquier comida.",
    imagen: "./images/arepas.jpeg"
  },
    {
    codigo: "4",
    nombre: "Empanadas",
    descripcion: "Deliciosas empanadas rellenas de carne, pollo o queso, perfectas para cualquier ocasión.",
    imagen: "./images/empanadas.jpeg"
  },
   {
    codigo: "7",
    nombre: "Empanadas de trigo",
    descripcion: "Deliciosas empanadas hechas con masa de trigo, rellenas de carne, pollo o queso.",
    imagen: "./images/empanadas_trigo.jpeg"
  },
  {
    codigo: "5",
    nombre: "Carimañolas",
    descripcion: "Deliciosas carimañolas rellenas de carne, pollo o queso, perfectas para cualquier ocasión.",
    imagen: "./images/carimanolas.jpg"
  },
   {
    codigo: "6",
    nombre: "Agua o chicha de maíz",
    descripcion: "Refrescante bebida tradicional hecha a base de maíz fermentado, perfecta para acompañar tus comidas.",
    imagen: "./images/agua_chicha_maiz.jpeg"
  }  
]

// Lista que contiene la información de los productos disponibles en la tienda.
const lista_productos = [
    { codigo: "011", nombre: "Masa de maíz:", descripcion: "Masa de maíz fresca y orgánica, ideal para preparar arepas, empanadas y otros platos típicos.", categoria: "Masa de maíz", codigo_categoria: "1", precio: 5000, clasificacion: 5, imagen: "./images/masa_maiz.jpeg" },
    
    { codigo: "021", nombre: "Masa de yuca:", descripcion: "Masa de yuca fresca y orgánica, ideal para preparar carimañolas, enyucados y otros platos típicos.", categoria: "Masa de yuca", codigo_categoria: "2", precio: 6000, clasificacion: 4, imagen: "./images/masa_yuca.jpeg" },

    { codigo: "031", nombre: "Arepas de huevo y carne molida:", descripcion: "Deliciosas arepas de huevo y carne molida, perfectas para tu desayuno o cena.", categoria: "Arepas", codigo_categoria: "3", precio: 4500, clasificacion: 5, imagen: "./images/arepas_huevo_carne_molida.jpeg" },
    { codigo: "032", nombre: "Arepas de huevo y carne mechada:", descripcion: "Deliciosas arepas de huevo y carne mechada, perfectas para cualquier comida.", categoria: "Arepas", codigo_categoria: "3", precio: 5500, clasificacion: 4, imagen: "./images/arepas_huevo_carne_mechada.jpeg" },
    { codigo: "033", nombre: "Arepas de huevo y ranchera:", descripcion: "Deliciosas arepas de huevo y salchicha ranchera, perfectas para tu desayuno o cena.", categoria: "Arepas", codigo_categoria: "3", precio: 5500, clasificacion: 5, imagen: "./images/arepas_huevo_ranchera.jpeg" },
    { codigo: "034", nombre: "Arepas dulce con queso:", descripcion: "Deliciosas arepas dulces rellenas o con porción de queso, perfectas para tu desayuno o cena.", categoria: "Arepas", codigo_categoria: "3", precio: 4000, clasificacion: 3, imagen: "./images/arepas_dulce_con_queso.jpeg" },

    { codigo: "041", nombre: "Empanadas de carne molida:", categoria: "Empanadas", descripcion: "Deliciosas empanadas rellenas de carne, perfectas para cualquier ocasión.", codigo_categoria: "4", precio: 3000, clasificacion: 5, imagen: "./images/empanadas_carne_molida.jpeg" },
    { codigo: "042", nombre: "Empanadas de pollo:", categoria: "Empanadas", descripcion: "Deliciosas empanadas rellenas de pollo, perfectas para cualquier ocasión.", codigo_categoria: "4", precio: 2500, clasificacion: 4, imagen: "./images/empanadas_pollo.jpeg" },
    { codigo: "043", nombre: "Empanadas de queso:", categoria: "Empanadas", descripcion: "Deliciosas empanadas rellenas de queso, perfectas para cualquier ocasión.", codigo_categoria: "4", precio: 3000, clasificacion: 4, imagen: "./images/empanadas_con_queso.jpeg" },
    { codigo: "044", nombre: "Empanadas de carne mechada:", categoria: "Empanadas", descripcion: "Deliciosas empanadas rellenas de carne mechada, perfectas para cualquier ocasión.", codigo_categoria: "4", precio: 3000, clasificacion: 4, imagen: "./images/empanadas_carne_mechada.jpeg" },


    { codigo: "051", nombre: "Carimañolas de queso:", categoria: "Carimañolas", descripcion: "Deliciosas carimañolas rellenas de queso perfectas para cualquier ocasión", codigo_categoria: "5", precio: 3500, clasificacion: 4, imagen: "./images/carimanolas_queso.jpeg" },
    { codigo: "052", nombre: "Carimañolas de carne:", categoria: "Carimañolas", descripcion: "Deliciosas carimañolas rellenas de carne perfectas para cualquier ocasión", codigo_categoria: "5", precio: 3500, clasificacion: 4, imagen: "./images/carimanolas_carne.jpeg" },
    { codigo: "053", nombre: "Carimañolas de pollo:", categoria: "Carimañolas", descripcion: "Deliciosas carimañolas rellenas de pollo perfectas para cualquier ocasión", codigo_categoria: "5", precio: 3500, clasificacion: 4, imagen: "./images/carimanolas_pollo.jpeg" },

    { codigo: "071", nombre: "Empanadas de trigo Hawaiana:", categoria: "Empanadas de trigo", descripcion: "Deliciosas empanadas hechas con masa de trigo, rellenas de queso, jamón y piña.", codigo_categoria: "7", precio: 4500, clasificacion: 4, imagen: "./images/empanadas_trigo_hawaiana.jpeg" },
    { codigo: "072", nombre: "Empanadas de trigo de pollo:", categoria: "Empanadas de trigo", descripcion: "Deliciosas empanadas hechas con masa de trigo, rellenas de pollo.", codigo_categoria: "7", precio: 4000, clasificacion: 4, imagen: "./images/empanadas_trigo_pollo.jpeg" },
    { codigo: "073", nombre: "Empanadas de trigo de jamón y queso:", categoria: "Empanadas de trigo", descripcion: "Deliciosas empanadas hechas con masa de trigo, rellenas de jamón y queso.", codigo_categoria: "7", precio: 4000, clasificacion: 4, imagen: "./images/empanadas_trigo_jamon_queso.jpeg" },

    { codigo: "061", nombre: "Vaso o jarra de agua o chicha de maíz:", categoria: "Agua o chicha de maíz", descripcion: "Refrescante vaso o jarra de agua o chicha de maíz.", codigo_categoria: "6", precio: 3000, clasificacion: 4, imagen: "./images/agua_chicha_maiz.jpeg" },

  ];


// Lista que representa el carrito de compras del usuario.
let carrito = [
    
];