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

    if(!regexPasswordInvalid.test(passwordRegistro.value)){
        error=true
        mensajeError+='La contraseña debe comenzar con mayúscula y tener al menos un número';
        alert('La contraseña debe comenzar con mayúscula y tener al menos un número')
    } 

    if(passwordRepetida.textContent !== passwordRegistro.textContent){
        error = true
        console.log(error)
        alert('Las contraseñas no coinciden')
    }

    if(!regexEmail.test(emailRegistro.value)){
        error = true
        console.log(error)
        alert('El email es incorrecto')
    }

    if(error){
        alert('No se mandó nada')
        console.log(mensajeError)
    }else{
        registrarCuenta(); //primero guardar los datos porque cuando la pagina se refresca se van
        form.submit();
        
    }
})

function registrarCuenta(){
    
    let usuarioNuevo = {
        "nombre": nombreRegistro.value,
        "password": passwordRegistro.value,
        "email": emailRegistro.value
    }

    usuariosRegistrados.push(usuarioNuevo);
    console.log(usuariosRegistrados);

    usuarioLocalStorage();
}

function usuarioLocalStorage(){
    localStorage.setItem("Usuarios", "Cuentas")

    localStorage.setItem("Usuarios",JSON.stringify(usuariosRegistrados))
}