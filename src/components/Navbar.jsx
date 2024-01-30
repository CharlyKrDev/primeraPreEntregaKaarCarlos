import React, { useState} from 'react';
import { CartWidget } from './CartWidget';
export const Navbar = () => {

    const [iconName, setIconName] = useState('menu');
    const [menuOpen, setMenuOpen] = useState(false);


    const onToggleMenu = () => {
        const newIconName = iconName === 'menu' ? 'close' : 'menu';
        setIconName(newIconName);
        console.log(newIconName);
        setMenuOpen(!menuOpen);

    };
    const menuClass = `duration-500 md:static absolute bg-black opacity-80 md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[7%]' : 'top-[-100%]'} md:w-auto flex items-center px-5 w-full`;

    return (

        <header className='bg-black font-bold text-white'>

            <nav className='flex justify-between items-center w-[99%] mx-auto'>
                <a className='flex gap-2 items-center justify-center ml-3' href="#"><img className='w-24 mt-0.5 invert' src="../public/eCommerce.svg" alt="logo" /><img className='w-16' src="../public/logo.jpg" alt="logo" /></a>
                <div className={menuClass}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8'>
                        <li><a className='hover:text-gray-500' href="#">Tienda</a></li>
                        <li><a className='hover:text-gray-500' href="#">Quienes somos?</a></li>
                        <li><a className='hover:text-gray-500' href="#">Comunidad</a></li>
                        <li><a className='hover:text-gray-500' href="#">Contacto</a></li>
                    </ul>
                </div>
                <CartWidget/>
                <div className='flex items-center gap-6'>
                <button className='bg-[#a6c1ee] text-white px-2 py-2 rounded-full hover:bg-[#87acec] mr-2'>
                        Ingresar
                    </button>

                    <ion-icon onClick={onToggleMenu} name={iconName} class='cursor-pointer text-3xl md:hidden '></ion-icon>


                </div>

            </nav>

        </header>


    )
} 