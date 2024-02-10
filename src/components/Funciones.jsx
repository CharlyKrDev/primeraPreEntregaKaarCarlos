
export const Funciones = () => {

    const descuentoAplicado = (prod.precioVigente) - ((prod.precioVigente * prod.descuento) / 100)
    const stock = prod.stock === 0 ? <span className="text-red-500 font-bold">Agotado</span> : (prod.stock <= 3 ?<span className="text-red-500 font-bold">¡Últimas unidades!</span> : <p className="text-end text-blue-400">Stock: {prod.stock}</p>)
  return (

  )
}
