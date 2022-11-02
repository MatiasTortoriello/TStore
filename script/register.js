let registro = document.getElementById('registro');

registro.addEventListener('click', (e) =>{

    e.preventDefault()
    if(validar()){
        regsitrarCuenta();
    } else {
        prompt('No se pudo registrar la cuenta.')
    }
    
})

function validar(){
    let error = false;
    let mensajeError = "";
    
    const nombreRegistro = document.getElementById('nombreUsuarioRegistro');
    const password = document.getElementById('passwordUsuarioRegistro')
    const passwordRepetida = document.getElementById('passwordUsuarioRegistroDos')
    const email = document.getElementById('emailUsuarioRegistro')

    if(nombreRegistro.value=""){
        error = true;
        mensajeError+="El nombre tiene que tener un mínimo de 5 caracteres"
    }
}

function regsitrarCuenta(){

}