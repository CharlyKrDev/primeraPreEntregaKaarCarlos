import React from 'react'
import Portada from '../../public/portada.jpg'
import { WelcomeTyping } from './WelcomeTyping'
export const ItemListContainer = () => {
  return (

    <main>
        <section className='flex flex-col text-white items-center justify-center bg-[#242424] min-h-[30vh] box-content w-auto h-auto border-4'>CARRUSEL</section>
        <section className='md:flex gap-10 justify-center max-h-[70vh]'>
        <article className='flex flex-col w-1/3 md:m-4 m-auto'><h1 className='font-bold'><WelcomeTyping/></h1><p className='m-auto text-lg'>En nuestra web no solo vas a encontrar los <strong>juegos</strong> más actuales del mercado, sino que también vas a poder ser parte de una de las comunidades <strong>gamers</strong> más importantes!</p></article>
        <div className='flex flex-col w-auto items-center '><img className='bg-white max-h-[60vh]'src={Portada} alt="portada" /></div>
        </section>
        
    </main>
  )
}
