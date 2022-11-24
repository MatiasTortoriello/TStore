
let listaDeDirecciones =JSON.parse(localStorage.getItem("Direcciones"));
let listaDeMetodos =JSON.parse(localStorage.getItem("Metodos"));
const direccionesAlias= document.querySelector("#direccionesAlias");
const direcciones= document.querySelector("#direcciones");
const metodos= document.querySelector(".mismetodosdiv");
const table = document.querySelector('#tbodyMiCuenta');
const table2 =document.querySelector('#tbody2')


console.log(listaDeDirecciones)
function actualizarDirecciones () {
    let listaDeDirecciones2 =JSON.parse(localStorage.getItem("Direcciones"));
    listaDeDirecciones2.forEach((direccion) =>{   
        

        /*
        const d= document.createElement('div')
        d.innerHTML= `<p>${direccion.alias}</p>`
        const d2=document.createElement('div')
        d2.classList.add('div-metodos')
        d2.innerHTML= `<p>${direccion.direccion}</p><button id="tachito${direccion.alias}" class="button-tachito"><i class="fas fa-trash"></i></button>`
        direccionesAlias.appendChild(d)
        direcciones.appendChild(d2)
        */
        
            table.innerHTML += `
                <tr>
                    <td>
                        ${direccion.alias}
                    </td>
                    <td>
                        ${direccion.direccion}
                    </td>
                    <td>
                        <button id="tachito${direccion.alias}" class="button">X</button>
                    </td>
                </tr>
            `;
        
        var tachitodireccion = document.getElementById(`tachito${direccion.alias}`)
    tachitodireccion.addEventListener('click', (e) => {
        console.log(tachitodireccion.parentNode.parentNode)
        tachitodireccion.parentNode.parentNode.remove();
            
        
    })

    })

}
actualizarDirecciones ()

function actualizarMetodos () {
    let listaDeMetodos2 =JSON.parse(localStorage.getItem("Metodos"));
    listaDeMetodos2.forEach((metodo) =>{   
        

        /*
        const d= document.createElement('div')
        d.innerHTML= `<p>${direccion.alias}</p>`
        const d2=document.createElement('div')
        d2.classList.add('div-metodos')
        d2.innerHTML= `<p>${direccion.direccion}</p><button id="tachito${direccion.alias}" class="button-tachito"><i class="fas fa-trash"></i></button>`
        direccionesAlias.appendChild(d)
        direcciones.appendChild(d2)
        */
        
            table2.innerHTML += `
                <tr>
                    <td>
                        ${metodo.alias}
                    </td>
                    <td>
                        <button id="tachito${metodo.alias}" class="button">X</button>
                    </td>
                </tr>
            `;
        
        var tachitometodo = document.getElementById(`tachito${metodo.alias}`)
    tachitometodo.addEventListener('click', (e) => {
        console.log(tachitometodo.parentNode.parentNode)
        tachitometodo.parentNode.parentNode.remove();
            
        
    })

    })
    

}
actualizarMetodos ()
/*
actualizarDirecciones();

console.log(listaDeMetodos)
function actualizarMetodos () {
    let listaDeMetodos2 =JSON.parse(localStorage.getItem("Metodos"));
    listaDeMetodos2.forEach((met) =>{
        const div= document.createElement('div')
        div.classList.add('div-metodos')
        div.innerHTML= `<p>${met.alias}</p><button onclick="eliminarMetodo" class="button-tachito"><i class="fas fa-trash"></i></button>`
        metodos.appendChild(div)
    })
}
*/
actualizarMetodos();

