import { useState } from "react";




export const Item = ({ prod }) => {
    const [iconNombre, setIconNombre] = useState('heart-outline');

    const onToggleFavorite = () => {

        const nuevoFavorito = iconNombre === 'heart-outline' ? 'heart' : 'heart-outline';
        console.log(nuevoFavorito)
        setIconNombre(nuevoFavorito);


    }
    const botoncategoria = "mr-2 rounded-md bg-[#313131] border-[1px] sm:p-2 p-1 border-white sm:text-sm focus:outline-none focus:border-none focus:ring focus:ring-green-500 text-[12px] transition duration-300 ease-out hover:bg-green-200 hover:text-black hover:font-bold hover:ease-in"
    const promocionActiva = prod.promocion === true ? <span className="text-green-400 text-[20px]">10% Desc</span> : "";
    const precioConDescuento = (prod.precioVigente) - ((prod.precioVigente * prod.descuento) / 100);
    const aplicandoPromocion = prod.promocion === true ? <span className="text-green-400 mr-1 font-bold text-[16px] duration-200 ease-in-out hover:text-[20px] "><span className="text-[14px] text-red-400 line-through mr-1">${prod.precioVigente}</span>${precioConDescuento}</span> : <span className="duration-200 ease-in-out hover:text-[20px] text-gray-300 hover:text-white hover:font-bold">${prod.precioVigente}</span>
    const stock = prod.stock === 0 ? <span className="text-red-500 font-bold">Agotado</span> : (prod.stock <= 3 ? <span className="text-red-500 font-bold">¡Últimas unidades!</span> : <p className="text-end text-blue-400">Stock: {prod.stock}</p>)
    return (
        <>  
            <section className="bg-[#313131] w-40 flex flex-col justify-between m-8 rounded sm:w-52 border-[1px]">
                <picture className=" ">
                    <img className="object-cover aspect-[.7]" src={`../img/${prod.img}`} alt={`Imagen de ${prod.nombre}`} />
                </picture>
                <div className="flex flex-col justify-between ">
                    <h2 className='mt-2 p-2 text-center mb-2 font-bold'>{prod.nombre}</h2>
                    <div className='text-right mb-2 '><button className={botoncategoria}>{prod.categoria[0]}</button> <button className={botoncategoria}>{prod.categoria[1]}</button> <button className={botoncategoria}>{prod.categoria[2]}</button> </div>
                </div>
                <div className="m-2">
                    <p className='text-left text-wrap lg:contents hidden flex-1'>{prod.descripcion}</p>
                    <div className='text-center mt-2'>{stock}</div>
                </div>
                <div className='flex flex-col m-2'>
                    <span className=''>{promocionActiva}</span>
                    <span className='mb-4 ml-4 flex justify-between items-center'>{aplicandoPromocion} <button onClick={onToggleFavorite} ><ion-icon class="mr-4 text-[28px] text-pink-400 text-center pt-2" name={iconNombre}></ion-icon></button></span>
                    <button className='mb-4 bg-blue-700 sm:w-[75%] w-[55%] text-[12px] text-semibold m-auto px-4 py-2 rounded-md hover:bg-blue-400 focus:outline'>
                        Agregar al carrito</button>

                </div>



            </section>
        </>
    )
}

