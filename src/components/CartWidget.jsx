import React from 'react'
import Carrito from '../../public/img/carrito.png'

export const CartWidget = () => {
  return (

    <a className='flex gap-1 fixed end-0 mr-12 bg-black rounded-lg   opacity-70 ' href="carrito">
      <img className='w-10 invert sm:mr-4 mr-0 ' src={Carrito} alt="carrito" />
      <span className='bg-blue-700 text-white rounded-lg h-6 px-2 mr-4'>0
      </span></a>
  )
}
