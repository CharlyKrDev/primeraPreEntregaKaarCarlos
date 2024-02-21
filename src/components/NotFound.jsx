import React from 'react'



export const NotFound = () =>{

    return(
        
        <div className='flex flex-col min-h-[82.3vh] w-[70vh] justify-end items-center m-auto bg-[url(".././public/img/404.jpg")] bg-cover bg-center'>
            <h2 className='bg-black opacity-80'>Pagina NO ENCONTRADA ERROR: 404</h2>
            
            <button className='bg-black opacity-80 border-2 border-black mb-4 mt-4 p-2 hover:bg-white hover:font-bold hover:text-black'><a href="/">Volver inicio</a></button>
        </div>

    
    )
}