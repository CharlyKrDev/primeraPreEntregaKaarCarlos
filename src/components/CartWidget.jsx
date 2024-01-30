import React from 'react'

export const CartWidget = () => {
  return (

    <a className='flex gap-1' href="#"><img className='w-10 invert' src="/public/carrito.png" alt="carrito" /><div className='bg-blue-700 text-white rounded-lg h-6 px-2 mr-5'>0</div></a>
  )
}
