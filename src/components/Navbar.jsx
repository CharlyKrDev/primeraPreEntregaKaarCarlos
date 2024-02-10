import React, { useState } from 'react';
import { CartWidget } from './CartWidget';
import { SearchInput } from './SearchInput';
import Logo from '../../public/img/logo.jpg'
import Ecommerce from '../../public/img/eCommerce.svg'

export const Navbar = () => {

    const [iconName, setIconName] = useState('menu');
    const [menuOpen, setMenuOpen] = useState(false);


    const onToggleMenu = () => {
        const newIconName = iconName === 'menu' ? 'close' : 'menu';
        setIconName(newIconName);
        console.log(newIconName);
        setMenuOpen(!menuOpen);

    };
    const menuClass = `duration-500 md:static absolute bg-black opacity-80 md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[8%]' : 'top-[-100%]'} md:w-auto flex items-center px-5 w-full`;

    return (

        <header className='bg-black font-bold text-white'>

            <nav className='flex justify-between items-center w-[99%] mx-auto'>
                <a className='flex gap-1 items-center justify-center ml-5' href="#"><img className='w-16 mt-0.5 invert' src={Ecommerce} alt="logo" /><img className='w-16 mr-2' src={Logo} alt="logo" /></a>
                <div className={menuClass}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8'>
                        <li><a className='hover:text-gray-500' href="#tienda">Tienda</a></li>
                        <li><a className='hover:text-gray-500' href="#">Quienes somos?</a></li>
                        <li><a className='hover:text-gray-500' href="#">Comunidad</a></li>
                        <li><a className='hover:text-gray-500' href="#">Contacto</a></li>
                        <li><SearchInput /></li>
                    </ul>
                </div>
                <CartWidget />
                <div className='flex items-center gap-6'>
                    <button className='text-white px-2 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg mr-2'>
                        Ingresar
                    </button>

                    <ion-icon onClick={onToggleMenu} name={iconName} class='cursor-pointer text-3xl md:hidden '></ion-icon>


                </div>

            </nav>

        </header>


    )
} 