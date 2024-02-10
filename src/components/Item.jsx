


export const Item = ({ prod }) => {
    const botonConsola = "mr-2 rounded-md bg-[#313131] border-[1px] p-1 border-green-400 transition duration-300 ease-out hover:bg-green-200 hover:text-black hover:font-bold hover:ease-in"
    const promocionActiva = prod.promocion === true ? <span className="text-green-400">10% Desc</span> : "";
    const precioConDescuento = (prod.precioVigente) - ((prod.precioVigente * prod.descuento) / 100);
    const aplicandoPromocion = prod.promocion === true ? <span className="text-green-400"><span className="text-red-400 line-through mr-1">${prod.precioVigente}</span>${precioConDescuento}</span> : <span>${prod.precioVigente}</span>
    const stock = prod.stock === 0 ? <span className="text-red-500 font-bold">Agotado</span> : (prod.stock <= 3 ? <span className="text-red-500 font-bold">¡Últimas unidades!</span> : <p className="text-end text-blue-400">Stock: {prod.stock}</p>)
    return (
        <>
            <section className="bg-[#313131] w-40 flex flex-col justify-between m-8 rounded sm:w-52">
                    <div className=" ">
                    <img className="object-cover aspect-[.7] " src={`../img/${prod.img}`} alt={`Imagen de ${prod.nombre}`} />
                    </div>
                    <div className="flex flex-col justify-between ">
                    <h2 className='mt-2 p-2 text-center mb-2 font-bold'>{prod.nombre}</h2>
                    <p className='text-right mb-2'><button className={botonConsola}>{prod.consola[0]}</button> <button className={botonConsola}>{prod.consola[1]}</button> <button className={botonConsola}>{prod.consola[2]}</button> </p>
                    </div>
                    <div className="m-2">
                    <p className='text-left text-wrap lg:contents hidden'>{prod.descripcion}</p>
                    <p className='text-center mt-2'>{stock}</p>
                    </div>
                    <div className='flex flex-col m-2'>
                        <span className=''>{promocionActiva}</span>
                        <span className='mb-4'>{aplicandoPromocion}</span>
                        <button className='mb-4 bg-blue-700 sm:w-[75%] w-[55%] text-[12px] text-semibold m-auto px-4 py-2 rounded-md hover:bg-blue-400 focus:outline'>
                            Agregar al carrito</button>

                    </div>



            </section>
        </>
    )
    }

