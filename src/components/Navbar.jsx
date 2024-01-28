import React, { useState} from 'react';
export const Navbar = () => {

    const [iconName, setIconName] = useState('menu');
    const [menuOpen, setMenuOpen] = useState(false);


    const onToggleMenu = () => {
        const newIconName = iconName === 'menu' ? 'close' : 'menu';
        setIconName(newIconName);
        console.log(newIconName);
        setMenuOpen(!menuOpen);

    };
    const menuClass = `duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[7%]' : 'top-[-100%]'} md:w-auto flex items-center px-5 w-full`;

    return (

        <header className='bg-white font-bold text-black'>

            <nav className='flex justify-between items-center w-[92%] mx-auto'>
                <a className='flex gap-2 items-center justify-center' href=""><img className='w-24 mt-0.5' src="../public/eCommerce.svg" alt="logo" /><img className='w-16' src="../public/ecommerce-svgrepo-com.svg" alt="logo" /></a>
                <div className={menuClass}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8'>
                        <li><a className='hover:text-gray-500' href="">Tienda</a></li>
                        <li><a className='hover:text-gray-500' href="">Quienes somos?</a></li>
                        <li><a className='hover:text-gray-500' href="">Contacto</a></li>
                        <li><a className='hover:text-gray-500' href="">Vemos</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-6'>
                    <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>
                        Ingresar
                    </button>

                    <ion-icon onClick={onToggleMenu} name={iconName} class='cursor-pointer text-3xl md:hidden '></ion-icon>


                </div>

            </nav>

        </header>


    )
} 