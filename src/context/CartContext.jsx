import { useState, createContext, useContext } from "react";


const CarritoContext = createContext()
export const useCarritoContext = () => useContext(CarritoContext)
export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    const estaEnCarrito = (id) => { //Busco la existencia del producto por id

        return carrito.some(prod => prod.id === id)

    }
    const agregarProducto = (producto, cantidad) => {
        if (estaEnCarrito(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].unidad = cantidad
            setCarrito(aux)

        } else {
            const nuevoProducto = {
                ...producto, unidad: cantidad

            }

            setCarrito([...carrito, nuevoProducto])

        }

    }

    const removerProducto = (id) => {

        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const vaciarCarrito = () => {

        setCarrito([])
    }

    const cantidadDeProductos = () => {

        return carrito.reduce((acum, prod) => acum += prod.unidad, 0)
    }

    const precioTotalDeCompra = () => {

        return carrito.reduce((acum, prod) => acum += (prod.unidad * prod.precio), 0)
    }
            console.log(carrito)

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, removerProducto, vaciarCarrito, cantidadDeProductos, precioTotalDeCompra }} >

            {props.children}

        </CarritoContext.Provider>
    )
}
