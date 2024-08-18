const localParseado= JSON.parse(localStorage.getItem("Juegos"));
const contenedorCarrito = document.getElementById("tabla-carrito")

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

localParseado.forEach((prod) => {
    const tr = document.createElement('tr')

    tr.className = ("productosEnCarrito")

    tr.innerHTML=`
    <td>
        ${prod.nombre}
    </td>

    <td>
        ${prod.cantidad}
    </td>

    <td>
        ${prod.precio}
    </td>
    `
    contenedorCarrito.appendChild(tr)
    console.log(localParseado)
})
}