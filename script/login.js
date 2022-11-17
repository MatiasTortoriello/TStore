let listaDeUsariosRegistrados=JSON.parse(localStorage.getItem("Usuarios"));

let nombre = document.getElementById('nombreUsuarioLogin')
let password = document.getElementById('passwordUsuarioLogin')
let loguearse = document.getElementById('form-loguearse')

loguearse.addEventListener('submit', (e) => {
    e.preventDefault()

    listaDeUsariosRegistrados.forEach(usuario => {
        if(usuario.nombre == nombre.value && usuario.password == password.value){
            alert('Ingreso correcto. Bienvenido!')
           loguearse.submit();
        } else {
            alert('Usuario o Constraseña inválidos')
        }  
    });
     
})
