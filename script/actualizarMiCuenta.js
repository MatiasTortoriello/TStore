const listaDeDirecciones =JSON.parse(localStorage.getItem("Direcciones"));
const listaDeMetodos =JSON.parse(localStorage.getItem("Metodos"));
const direccionesAlias= document.querySelector("#direccionesAlias");
const direcciones= document.querySelector("#direcciones");
const metodos= document.querySelector(".mismetodosdiv")

console.log(listaDeDirecciones)
const actualizarDirecciones = () =>{
    listaDeDirecciones.forEach((direccion) =>{
        const p= document.createElement('p')
        p.innerHTML= `<p>${direccion.alias}</p>`
        const p2=document.createElement('p')
        p2.innerHTML= `<p>${direccion.direccion}</p>`
        direccionesAlias.appendChild(p)
        direcciones.appendChild(p2)
    })
}
actualizarDirecciones();

console.log(listaDeMetodos)
const actualizarMetodos = () =>{
    listaDeMetodos.forEach((met) =>{
        const p3= document.createElement('p')
        p3.innerHTML= `<p>${met.alias}</p>`
        metodos.appendChild(p3)
    })
}
actualizarMetodos();