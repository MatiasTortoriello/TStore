let listaJuegosComprados = [];

const contenedorCarrito = document.getElementById("tabla-carrito")

const boton = document.getElementById(`agregar${producto.id}`)

boton.addEventListener('click', () => {

    agregarAlCarrito(producto.id)

})


const agregarAlCarrito = (prodId) => {
    
    const existe = listaJuegosComprados.some (prod => prod.id === prodId)

    if (existe){
        const prod = listaJuegosComprados.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        listaJuegosComprados.push(item)
    }

    actualizarCarrito() 
}

const actualizarCarrito = () => {
contenedorCarrito.innerHTML = ""

listaJuegosComprados.forEach((prod) => {
    const tr = document.createElement('tr')

    tr.className = ("productosEnCarrito")

    tr.innerHTML= `
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
    console.log(listaJuegosComprados)
}
)}



