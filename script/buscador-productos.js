var darksoulsimg ='../assets/ImgJuegos/Accion/DarkSouls.jpg'
var devilmaycrydmcimg ='../assets/ImgJuegos/Accion/dmc.jpg'
var devilmaycry5img ="../assets/ImgJuegos/Accion/dmc5.jpg"
var godofwarimg ="../assets/ImgJuegos/Accion/portada-gfw.webp"
var needforspeedimg ="../assets/ImgJuegos/Carreras/nfs.webp"
var nfsheatimg ="../assets/ImgJuegos/Carreras/nfsheat.webp"
var codimg ="../assets/ImgJuegos/Shooters/CODMW2.jpg"
var ageofempiresimg ="../assets/ImgJuegos/Strategy/Age-of-Empires.jpg"

let listaJuegos = [
    
    {
        id: 01,
        nombre: "dark souls",
        genero: "Rpg",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 7000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: darksoulsimg
    },

    {
        id: 02,
        nombre: "devil may cry dmc",
        genero: "accion",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 3000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: devilmaycrydmcimg
    },

    {
        id: 03,
        nombre: "devil may cry 5",
        genero: "accion",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 2000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: devilmaycry5img
    },

    {
        id: 04,
        nombre: "god of war",
        genero: "aventura",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 5000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: godofwarimg
    },

    {
        id: 05,
        nombre: "need for speed",
        genero: "carreras",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 3500,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: needforspeedimg
    },

    {
        id: 06,
        nombre: "nfs heat",
        genero: "carreras",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 6000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: nfsheatimg
    },

    {
        id: 07,
        nombre: "call of duty: modern warfare",
        genero: "terror",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 7000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: codimg
    },

    {
        id: 08,
        nombre: "age of empires 3",
        genero: "rts",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 10000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: ageofempiresimg
    }
]

const categoriasDiv = document.querySelector(".categorias-lista");

listaJuegos.forEach((item)=>{
    categoriasDiv.innerHTML+=`<div class="categorias-div">
    <a href="/pages/producto.html">
        <img src=${item.imagen}>
        <p>${item.nombre}</p>
    </a>
    <button><p class="etiquetapreciocategorias">${item.precio}.- <i class="fa-solid fa-cart-shopping"></i> </p> </button>
</div>`;
});

const buscador = document.querySelector(".buscador")
buscador.addEventListener("keyup",()=>{
    busqueda=buscador.value;
    let categoriasFiltradas= listaJuegos.filter(nombre => nombre.nombre.indexOf(busqueda)>-1);
    categoriasDiv.innerHTML=``;
    categoriasFiltradas.forEach((item)=>{
        categoriasDiv.innerHTML+=`<div class="categorias-div">
        <a href="/pages/producto.html">
            <img src=${item.imagen}>
            <p>${item.nombre}</p>
        </a>
        <button><p class="etiquetapreciocategorias">${item.precio}.- <i class="fa-solid fa-cart-shopping"></i> </p> </button>
    </div>`;
    })
})