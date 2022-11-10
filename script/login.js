let listaDeUsariosRegistrados=JSON.parse(localStorage.getItem("usuariosRegistrados"));

let nombre = document.getElementById('nombreUsuarioLogin')
let password = document.getElementById('passwordUsuarioLogin')

listaDeUsariosRegistrados.forEach(usuario => {
    if(usuario.nombre == nombre && usuario.password == password){
        alert('Ingreso correcto. Bienvenido!')
    } else {
        alert('Usuario o Constraseña inválidos')
    }  
});
