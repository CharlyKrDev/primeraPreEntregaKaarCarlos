
export const Item = ({ prod }) => {
    const descuentoAplicado = (prod.precioVigente) - ((prod.precioVigente * prod.descuento) / 100)
    const stock = prod.stock === 0 ? <span className="text-red-500 font-bold">Agotado</span> : (prod.stock <= 3 ?<span className="text-red-500 font-bold">¡Últimas unidades!</span> : <p className="text-end text-blue-400">Stock: {prod.stock}</p>)
    return (
        <>
            <section className="bg-[#313131] w-52 flex m-8 rounded">
                <div className="flex flex-col justify-between m-2 ">
                    <img className="object-cover aspect-[.7] " src={`../img/${prod.img}`} alt={`Imagen de ${prod.nombre}`} />
                    <h2 className='mt-2 p-2 text-center mb-2 font-bold'>{prod.nombre}</h2>
                    <p className='text-right mb-2'>{prod.consola[0]} {prod.consola[1]} {prod.consola[2]}</p>
                    <p className='text-left text-wrap'>{prod.descripcion}</p>
                    <p className='text-center'>{stock}</p>
                    <div className='flex flex-col'>
                        <span className=''>{prod.promocion === true ? <span className="text-green-400">10% Desc</span> : ""}</span>
                        <span className=''>{prod.promocion === true ? <span className="text-green-400"><span className="text-red-400 line-through mr-1">${prod.precioVigente}</span>${descuentoAplicado}</span> : <span>${prod.precioVigente}</span>}</span>
                        <button className='bg-blue-700 w-[75%] m-auto text-white px-4 py-2 rounded-md hover:bg-blue-400 focus:outline'>
                            Agregar al carrito</button>

                    </div>
                </div>


            </section>
        </>
    )



}
