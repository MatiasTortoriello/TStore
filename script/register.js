let registro = document.querySelector('#form');
let regexPasswordInvalid = /^(([A-Z])+\w+([0-9])+)+\w+$/;
let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;

let nombreRegistro = document.getElementById('nombreUsuarioRegistro');
let passwordRegistro = document.getElementById('passwordUsuarioRegistro')
let passwordRepetida = document.getElementById('passwordUsuarioRegistroDos')
let emailRegistro = document.getElementById('emailUsuarioRegistro')

let usuariosRegistrados=[]

registro.addEventListener('submit', (e) =>{

    e.preventDefault()
    let error = false;
    let mensajeError = "";
    
    if(nombreRegistro.value.length<5){
        error = true;
        mensajeError+="<p>El nombre tiene que tener un mínimo de 5 caracteres</p>"
        alert('El nombre tiene que tener un mínimo de 5 caracteres')
    }

    if(passwordRegistro.length<=7){
        error=true
        console.log(error)
        alert('La contraseña debe tener al menos 8 caracteres')
    }

    if(!regexPasswordInvalid.test(passwordRegistro)){
        error=true
        console.log(error)
        alert('La contraseña debe comenzar con mayúscula y tener al menos un número')
    } 

    if(passwordRepetida.textContent !== passwordRegistro.textContent){
        error = true
        console.log(error)
        alert('Las contraseñas no coinciden')
    }

    if(!regexEmail.test(emailRegistro)){
        error = true
        console.log(error)
        alert('El email es incorrecto')
    }

    if(error){
        alert('No se mandó nada')
    }else{
        form.submit();
        regsitrarCuenta();
    }
})

function regsitrarCuenta(){
    
    let usuarioNuevo = {
        "nombre": nombreRegistro,
        "password": passwordRegistro,
        "email": emailRegistro
    }

    usuariosRegistrados.push(usuarioNuevo);

    usuarioLocalStorage();
}

function usuarioLocalStorage(){
    localStorage.setItem("Usuarios", "Cuentas")

    localStorage.setItem("Usuarios",JSON.stringify(usuariosRegistrados))
}