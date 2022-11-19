
var shooterimg ='../assets/ImgJuegos/Shooters/CODMW2.jpg';

var rpgimg='../assets/ImgJuegos/Accion/DarkSouls.jpg'

var carrerasimg='../assets/ImgJuegos/Carreras/nfs.webp'

var rtsimg='../assets/ImgJuegos/Strategy/Age-of-Empires.jpg'

var accionimg='../assets/ImgJuegos/Accion/dmc5.jpg'

var sigiloimg='../assets/ImgJuegos/Accion/assassinscreed.jpg'

var terrorimg='../assets/ImgJuegos/Shooters/resident_evil_4-3303737.jpg'

var estrategiaimg='../assets/ImgJuegos/Strategy/Warcraft-3.jpg'
const categorias=[
    {
        categoria: 'shooter',
        imagen: shooterimg
    },
    {
        categoria: 'rpg',
        imagen: rpgimg
    },
    {
        categoria: 'carreras',
        imagen: carrerasimg
    },
    {
        categoria: 'rts',
        imagen: rtsimg
    },
    {
        categoria: 'accion',
        imagen: accionimg
    },
    {
        categoria: 'sigilo',
        imagen: sigiloimg
    },
    {
        categoria: 'terror',
        imagen: terrorimg
    },
    {
        categoria: 'estrategia',
        imagen: estrategiaimg
    }
]

const categoriasDiv = document.querySelector(".categorias-lista");

categorias.forEach((item)=>{
    categoriasDiv.innerHTML+=`<div class="categorias-div">
    <a href="../pages/categorias-productos.html">
        <img src=${item.imagen}>
        <p>${item.categoria}</p>
    </a>
</div>`;
});

const buscador = document.querySelector(".buscador")
buscador.addEventListener("keyup",()=>{
    busqueda=buscador.value;
    let categoriasFiltradas= categorias.filter(categoria => categoria.categoria.indexOf(busqueda)>-1);
    categoriasDiv.innerHTML=``;
    categoriasFiltradas.forEach((item)=>{
        categoriasDiv.innerHTML+=`<div class="categorias-div">
    <a href="/pages/categorias-productos.html">
        <img src=${item.imagen}>
        <p>${item.categoria}</p>
    </a>
</div>`;
    })
})