
let listaDeDirecciones =JSON.parse(localStorage.getItem("Direcciones"));
let listaDeMetodos =JSON.parse(localStorage.getItem("Metodos"));
const direccionesAlias= document.querySelector("#direccionesAlias");
const direcciones= document.querySelector("#direcciones");
const metodos= document.querySelector(".mismetodosdiv");
const table = document.querySelector('#tbodyMiCuenta');


console.log(listaDeDirecciones)
function actualizarDirecciones () {
    let listaDeDirecciones2 =JSON.parse(localStorage.getItem("Direcciones"));
    listaDeDirecciones2.forEach((direccion) =>{   
        

        
        const d= document.createElement('div')
        d.innerHTML= `<p>${direccion.alias}</p>`
        const d2=document.createElement('div')
        d2.classList.add('div-metodos')
        d2.innerHTML= `<p>${direccion.direccion}</p><button id="tachito${direccion.alias}" class="button-tachito"><i class="fas fa-trash"></i></button>`
        direccionesAlias.appendChild(d)
        direcciones.appendChild(d2)
        
        
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


/*
class Player {

    constructor({alias, direccion}) 
    {
        this.alias = alias;
        this.direccion = direccion;
    }
}

class Helper {
    static bringStorage() {
        let players = localStorage.getItem("players");
        if (players === null) {
            players = [];
        } else {
            players = JSON.parse(players);
        }
        return players;
    }

    static storageData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static savePlayer(player) {
        const players = Helper.bringStorage();
        players.push(player);
        Helper.storageData('players', players);
    }

    static deletePlayer(alias) {
        let players = Helper.bringStorage();
        players = players.filter(player => player.alias != alias);
        Helper.storageData('players', players);
    }

    static updateData() {
        const table = document.querySelector('tbody');
        table.innerHTML = '';
        const players = Helper.bringStorage();
        players.forEach(player => {
            table.innerHTML += `
                <tr>
                    <td>
                        ${player.alias}
                    </td>
                    <td>
                        ${player.direccion}
                    </td>
                    <td>
                        <button id="${player.alias}" class="button">X</button>
                    </td>
                </tr>
            `;
        });
    }
}
*/