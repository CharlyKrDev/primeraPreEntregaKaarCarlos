import React from 'react'
import Portada from '../../public/img/portada.jpg'
import { WelcomeTyping } from './WelcomeTyping'
import { Footer } from './Footer'
export const LandingPage = () => {
  return (

    <>
      <main className='bg-black'>
        <section className='flex flex-col text-white items-center justify-center bg-[#242424] min-h-[25vh] box-content w-auto h-auto border-4'>
          CARRUSEL
        </section >
        <section className='md:flex justify-center h-[56.3vh]'>
          <article className='flex flex-col text-center md:m-4 m-auto w-[40%]'><h1 className='font-bold'><WelcomeTyping /></h1><p className='m-auto text-lg'>En nuestra web no solo vas a encontrar los <strong>juegos</strong> más actuales del mercado, sino que también vas a poder ser parte de una de las comunidades <strong>gamers</strong> más importantes!</p></article>
          <picture className='flex flex-col sm:w-[60%] w-[60%] m-auto items-center'><img className='bg-white max-h-[55vh] m-auto' src={Portada} alt="portada" /></picture>
        </section>



      </main>


    </>


  )
}
