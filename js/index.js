const listadoCelulares = [
  {
    id: 1,
    marca: "Samsung",
    modelo: "Galaxy S24 Ultra",
    precio: 1500000,
    descripcion:
      "Pantalla Dynamic AMOLED de 6.8 pulgadas, cámara de 200MP y procesador Snapdragon 8 Gen 3 con funciones avanzadas de Inteligencia Artificial.",
  },
  {
    id: 2,
    marca: "Apple",
    modelo: "iPhone 15 Pro Max",
    precio: 1850000,
    descripcion:
      "Chasis de titanio, chip A17 Pro ideal para gaming, zoom óptico de 5x y puerto USB-C de alta velocidad.",
  },
  {
    id: 3,
    marca: "Motorola",
    modelo: "Edge 50 Pro",
    precio: 980000,
    descripcion:
      "Pantalla curva pOLED a 144Hz, carga ultrarrápida de 125W y diseño premium con acabado en cuero vegano.",
  },
  {
    id: 4,
    marca: "Xiaomi",
    modelo: "Redmi Note 13 Pro+",
    precio: 750000,
    descripcion:
      "Excelente relación calidad-precio. Cámara principal de 200MP con OIS, resistencia al agua IP68 y carga de 120W.",
  },
  {
    id: 5,
    marca: "Google",
    modelo: "Pixel 8 Pro",
    precio: 1200000,
    descripcion:
      "La experiencia de Android más pura, software fotográfico líder en el mercado impulsado por el chip Tensor G3.",
  },
  {
    id: 6,
    marca: "Samsung",
    modelo: "Galaxy A55",
    precio: 650000,
    descripcion:
      "El rey de la gama media de Samsung. Estructura de metal, pantalla Super AMOLED y resistencia al agua y polvo.",
  },
  {
    id: 7,
    marca: "Motorola",
    modelo: "Moto G84",
    precio: 450000,
    descripcion:
      "Conectividad 5G, gran batería de 5000 mAh, 256GB de almacenamiento interno y pantalla fluida de 120Hz.",
  },
  {
    id: 8,
    marca: "Apple",
    modelo: "iPhone 13",
    precio: 990000,
    descripcion:
      "Un clásico que sigue vigente. Excelente rendimiento con el chip A15 Bionic y doble cámara trasera de gran calidad.",
  },
  {
    id: 9,
    marca: "Xiaomi",
    modelo: "Poco X6 Pro",
    precio: 580000,
    descripcion:
      "Diseñado especialmente para rendimiento y gaming en la gama media con procesador Dimensity 8300 Ultra.",
  },
  {
    id: 10,
    marca: "Samsung",
    modelo: "Galaxy Z Flip 5",
    precio: 1350000,
    descripcion:
      "Smartphone plegable compacto con pantalla externa funcional de 3.4 pulgadas y bisagra sin huecos.",
  },
  {
    id: 11,
    marca: "Motorola",
    modelo: "Razr 40 Ultra",
    precio: 1400000,
    descripcion:
      "Diseño plegable vanguardista con la pantalla externa más grande y fluida de su categoría.",
  },
  {
    id: 12,
    marca: "Xiaomi",
    modelo: "Redmi 13C",
    precio: 280000,
    descripcion:
      "Opción ultra económica ideal para el día a día. Pantalla de 90Hz y gran autonomía de batería.",
  },
  {
    id: 13,
    marca: "Samsung",
    modelo: "Galaxy A15 LTE",
    precio: 320000,
    descripcion:
      "Celular de entrada confiable, pantalla Super AMOLED de 90Hz y actualizaciones de software garantizadas por años.",
  },
  {
    id: 14,
    marca: "Apple",
    modelo: "iPhone 14",
    precio: 1150000,
    descripcion:
      "Pantalla Super Retina XDR de 6.1 pulgadas, detección de choques y mejoras notables en la fotografía nocturna.",
  },
];

let carrito = [];

iniciar();

function iniciar() {
  saludar();
  obtenerProductos();
}

async function obtenerProductos() {
  try {
    const contenedor = document.getElementById("contenedor-productos");
    const response = await fetch("https://fakestoreapi.com/products");
    let htmlTarjetas = "";

    if (!response.ok) {
      throw new Error("Error al obtener datos:", response.status);
    }

    const productos = await response.json();

    productos.forEach((prod) => {
      htmlTarjetas += `<div class="card-producto">
                <img src="${prod.image}" alt="Imagen producto">
                <div class="info-producto">
                    <h3>${prod.title}</h3>
                    <p>${prod.description}</p>
                </div>
                <div class="info-compra">
                    <h3 class="precio">$ ${prod.price}</h3>
                    <div class="contenedor-botones">
                        <button class="boton-sumar">+</button>
                        <button class="boton-restar">-</button>
                    </div>
                </div>
            </div>`;
    });

    contenedor.innerHTML = htmlTarjetas;
  } catch (error) {
    console.error("Error: ", error);
  }
}

function saludar(){
  const saludo = document.getElementById("usuario");
  let nombre = localStorage.getItem("nombreUsuario") || "Usuario";

  saludo.innerText = nombre;
}