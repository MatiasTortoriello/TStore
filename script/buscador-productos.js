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
        cantidad: 1,
        genero: "Rpg",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 7000,
        descripcion: "Un juego re jodido. Compralo si tenes huevos.",
        imagen: darksoulsimg
    },

    {
        id: 02,
        nombre: "devil may cry dmc",
        cantidad: 1,
        genero: "accion",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 3000,
        descripcion: "Un juego para otakus.",
        imagen: devilmaycrydmcimg
    },

    {
        id: 03,
        nombre: "devil may cry 5",
        cantidad: 1,
        genero: "accion",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 2000,
        descripcion: "Otro juego para otakus.",
        imagen: devilmaycry5img
    },

    {
        id: 04,
        nombre: "god of war",
        cantidad: 1,
        genero: "aventura",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 5000,
        descripcion: "El juego que nunca salió en PC.",
        imagen: godofwarimg
    },

    {
        id: 05,
        nombre: "need for speed",
        cantidad: 1,
        genero: "carreras",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 3500,
        descripcion: "Un juego de autitos. Los primeros 5 estaban re bien.",
        imagen: needforspeedimg
    },

    {
        id: 06,
        nombre: "nfs heat",
        cantidad: 1,
        genero: "carreras",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 6000,
        descripcion: "Un copy paste de los otros NFS, compralo sólo para gastar guita.",
        imagen: nfsheatimg
    },

    {
        id: 07,
        nombre: "call of duty: modern warfare",
        cantidad: 1,
        genero: "terror",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 7000,
        descripcion: "Le disparás a árabes y chinos por igual. Re divertido y racista.",
        imagen: codimg
    },

    {
        id: 08,
        nombre: "age of empires 3",
        cantidad: 1,
        genero: "rts",
        plataformas: ["PC", "Playstation", "Xbox"],
        precio: 10000,
        descripcion: "Darwin.",
        imagen: ageofempiresimg
    }
]

const categoriasDiv = document.querySelector(".categorias-lista");

listaJuegos.forEach((item)=>{
    categoriasDiv.innerHTML+=
    `<div class="categorias-div">
        <a href="/pages/producto.html">
            <img src=${item.imagen}>
            <p>${item.nombre}</p>
        </a>
        <p class="etiquetapreciocategorias">${item.precio}.- 
            <button id="agregar${item.id}"> 
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </p>
    </div>`;
    

});

function productoLocalStorage(){
    localStorage.setItem("Juegos")

    localStorage.setItem("Juegos",JSON.stringify(listaJuegos))
}



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
        <button class="button-categoria-producto"><p class="etiquetapreciocategorias">
        ${item.precio}.- <i class="fa-solid fa-cart-shopping"></i> </p> </button>
    </div>`;
    })
})

function comprarJuego(){

}