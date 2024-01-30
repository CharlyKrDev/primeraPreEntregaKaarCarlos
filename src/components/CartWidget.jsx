import React from 'react'

export const CartWidget = () => {
  return (

    <a className='flex gap-1' href="#"><img className='w-10 mr-2 invert' src="./public/carrito.png" alt="carrito" /><div className='bg-black text-white rounded-full h-6 px-2'>0</div></a>
  )
}
