let registro = document.getElementById('registro');
let regexPasswordInvalid = / /;
let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;

let usuariosRegistrados=[]

registro.addEventListener('click', (e) =>{

    e.preventDefault()
    if(validar()){
        regsitrarCuenta();
    } else {
        alert('No se pudo registrar la cuenta.')
    }
    
})

function validar(){
    let error = false;
    let mensajeError = "";
    let regexPasswordInvalid = / /;
    let regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;
    
    const nombreRegistro = document.getElementById('nombreUsuarioRegistro');
    const passwordRegistro = document.getElementById('passwordUsuarioRegistro')
    const passwordRepetida = document.getElementById('passwordUsuarioRegistroDos')
    const emailRegistro = document.getElementById('emailUsuarioRegistro')

    if(nombreRegistro.value.length<5){
        error = true;
        mensajeError+="<p>El nombre tiene que tener un mínimo de 5 caracteres</p>"
        alert('El nombre tiene que tener un mínimo de 5 caracteres')
    }

    if(passwordRegistro.length<5){
        error=true
        console.log(error)
        alert('La contraseña debe tener más de 5 caracteres')
    }

    if(!passwordRegistro.test(/^[A-Z]$/)){
        error=true
        console.log(error)
        alert('La contraseña debe tener una letra mayúscula')
    }

    /*if(!passwordRegistro.matches(/\d/)){
        error=true
        console.log(error)
        alert('La contraseña debe tener al menos un número')
    }*/

    /*if(regexPasswordInvalid.test(passwordRegistro)){
        error = true
        console.log(error)
        alert('la contraseña no debe contener espacios')
    }*/

    if(passwordRepetida.length !== passwordRegistro.length){
        error = true
        console.log(error)
        alert('Las contraseñas no coinciden')
    }

    if(!regexEmail.test(emailRegistro)){
        error = true
        console.log(error)
        alert('El email es incorrecto')
    }

}

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