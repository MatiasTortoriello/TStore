const listaDeDirecciones =JSON.parse(localStorage.getItem("Direcciones"));
const listaDeMetodos =JSON.parse(localStorage.getItem("Metodos"));
const direccionesAlias= document.querySelector("#direccionesAlias");
const direcciones= document.querySelector("#direcciones");
const metodos= document.querySelector(".mismetodosdiv")

console.log(listaDeDirecciones)
const actualizarDirecciones = () =>{
    listaDeDirecciones.forEach((direccion) =>{
        const d= document.createElement('div')
        d.innerHTML= `<p>${direccion.alias}</p>`
        const d2=document.createElement('div')
        d2.classList.add('div-metodos')
        d2.innerHTML= `<p>${direccion.direccion}</p><button class="button-tachito"><i class="fas fa-trash"></i></button>`
        direccionesAlias.appendChild(d)
        direcciones.appendChild(d2)
    })
}
actualizarDirecciones();

console.log(listaDeMetodos)
const actualizarMetodos = () =>{
    listaDeMetodos.forEach((met) =>{
        const div= document.createElement('div')
        div.classList.add('div-metodos')
        div.innerHTML= `<p>${met.alias}</p><button onclick="eliminarMetodo" class="button-tachito"><i class="fas fa-trash"></i></button>`
        metodos.appendChild(div)
    })
    
}
actualizarMetodos();


