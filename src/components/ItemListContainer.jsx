import React from 'react'

export const ItemListContainer = () => {
  return (

    <main className='text-white'>
        <section className='flex flex-col text-white  w-full items-center justify-center bg-green-400 min-h-[30vh]'>CARRUSEL</section>
        <section className='flex gap-10 items-center justify-center min-h-[60vh]'>
        <article className='flex flex-col w-1/2 items-center'><p>CONTENIDO/BIENVENIDO</p></article>
        <div className='flex flex-col w-1/2 items-center'><img src="./public/portada.jpg" alt="portada" /></div>
        </section>
        
    </main>
  )
}
