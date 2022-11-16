const abrirDirecciones= document.querySelector("#agregar-direccion");
const abrirPagos= document.querySelector("#agregar-pago");
const modalDireccion= document.querySelector("#modal-direcciones");
const modalPagos= document.querySelector("#modal-pagos");
const agregarDireccion= document.querySelector("#agregardireccion")
const agregarAlias= document.querySelector("#agregaralias")
const direccionesAlias= document.querySelector("#direccionesAlias")
const direcciones= document.querySelector("#direcciones")
let listaDeDireccionesRegistradas=JSON.parse(localStorage.getItem("Direcciones"));
actualizarDirecciones();


abrirDirecciones.addEventListener("click", () =>{
    modalDireccion.showModal();
})

abrirPagos.addEventListener("click", () =>{
    modalPagos.showModal();
})

let direccionesRegistradas=[];
function registrarDireccion(){
    
    let direccionNueva = {
        "alias": agregarAlias.value,
        "direccion": agregarDireccion.value
    }

    direccionesRegistradas.push(direccionNueva);
    console.log(direccionesRegistradas);

    direccionesLocalStorage();
}

    const actualizarDirecciones = () =>{
        listaDeDireccionesRegistradas.forEach((direccion) =>{
            const p= document.createElement('p')
            p.innerHTML= <p>${listaDeDireccionesRegistradas.alias}</p>
            const p2=document.createElement('p')
            p.innerHTML= <p>${listaDeDireccionesRegistradas.direccion}</p>
            direccionesAlias.appendChild(p)
            direcciones.appendChild(p2)

        })
    }


function direccionesLocalStorage(){
    localStorage.setItem("Direcciones", "Direccion")
    localStorage.setItem("Direcciones",JSON.stringify(direccionesRegistradas))
}