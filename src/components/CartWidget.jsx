import React from 'react'

export const CartWidget = () => {
  return (

    <a className='flex gap-1' href="#">
      <img className='w-10 invert' src="../src/assets/carrito.png" alt="carrito" />
      <span className='bg-blue-700 text-white rounded-lg h-6 px-2 mr-5'>0
      </span>
      </a>
  )
}
