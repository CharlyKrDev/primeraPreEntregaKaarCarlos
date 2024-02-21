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
    menuOpen ? "top-[9%]" : "top-[-100%]"
  } md:w-auto flex items-center px-5 w-full z-10`;
  const menuGeneral = `active:scale-95 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`;

  return (
    <header className="bg-black font-bold text-white h-[9vh] sm:h-[7vh]">
      <nav className="flex justify-between items-center  m-auto">
        <Link to={"/"}>
          <button className="flex gap-1 items-center justify-center sm:ml-12 ml-6">
            <img className="w-16 mt-0.5 invert" src={Ecommerce} alt="logo" />
            <img className="w-16 pr-4 h-[9vh] sm:h-[7vh] m-auto" src={Logo} alt="logo" />
          </button>
        </Link>

        <div className={menuClass}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
            <li>
              <Link to={tiendaWeb}>
                <button className={menuGeneral}>Tienda</button>
              </Link>
            </li>
            <li>
            <Categorias />

            </li>
            <li>
              <Link to={"/comunidad"}>
                <button className={menuGeneral}>Comunidad</button>
              </Link>
            </li>
            <li>
              <Link to={"/contacto"}>
                <button className={menuGeneral}>Contacto</button>
              </Link>
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
