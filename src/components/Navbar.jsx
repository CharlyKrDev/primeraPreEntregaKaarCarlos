import React, { useState } from "react";
import { CartWidget } from "./CartWidget";
import { SearchInput } from "./SearchInput";
import Logo from "../../public/img/logo.jpg";
import Ecommerce from "../../public/img/eCommerce.svg";
import { Categorias } from "./Categorias";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [iconName, setIconName] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);
  const tiendaWeb = "/tienda";

  const onToggleMenu = () => {
    const newIconName = iconName === "menu" ? "close" : "menu";
    setIconName(newIconName);
    console.log(newIconName);
    setMenuOpen(!menuOpen);
  };
  const menuClass = `duration-500 md:static absolute bg-black opacity-80 md:min-h-fit min-h-[60vh] left-0 ${
    menuOpen ? "top-[8%]" : "top-[-100%]"
  } md:w-auto flex items-center px-5 w-full`;
  const menuGeneral = `text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`;

  return (
    <header className="bg-black font-bold text-white">
      <nav className="flex justify-between items-center  mx-auto">
        <a
          className="flex gap-1 items-center justify-center sm:ml-12 ml-6"
          href="/"
        >
          <img className="w-16 mt-0.5 invert" src={Ecommerce} alt="logo" />
          <img className="w-16 pr-4" src={Logo} alt="logo" />
        </a>
        <div className={menuClass}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
            <li className={menuGeneral}>
              <Link to={tiendaWeb}>
                <p className="hover:text-gray-500">Tienda</p>
              </Link>
            </li>

            <Categorias />
            <li className={menuGeneral}>
              <a className="hover:text-gray-500" href="#">
                Comunidad
              </a>
            </li>
            <li className={menuGeneral}>
              <a className="hover:text-gray-500" href="#">
                Contacto
              </a>
            </li>
            <li className="text-white px-2 py-2 rounded-lg mr-24"></li>
          </ul>
        </div>
        <CartWidget />
        <div className="flex items-center gap-6">
          <ion-icon
            onClick={onToggleMenu}
            name={iconName}
            class="cursor-pointer mr-4 text-3xl md:hidden "
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};
