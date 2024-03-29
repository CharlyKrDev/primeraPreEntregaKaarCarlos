import React, { useState } from "react";
import { CartWidget } from "./CartWidget";
import Logo from "../img/logo.jpg";
import Ecommerce from "../img/eCommerce.svg";
import { Categorias } from "./Categorias";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [nombreIcono, setNombreIcono] = useState("menu");
  const [menuDesplegado, setMenuDesplegado] = useState(false);
  const tiendaWeb = "/tienda";

  const clickMenu = () => {
    const nuevoNombreIcono = nombreIcono === "menu" ? "close" : "menu";
    setNombreIcono(nuevoNombreIcono);
    console.log(nuevoNombreIcono);
    setMenuDesplegado(!menuDesplegado);
  };

  const plegarMenu = () => {
    setTimeout(() => {
      setMenuDesplegado(false);
      setNombreIcono("menu");
    }, 600);
  };

  const menuClass = `duration-500 md:static absolute bg-black opacity-80 md:min-h-fit min-h-[60vh] left-0 ${
    menuDesplegado ? "sm:top-[7%] top-[9%]" : "top-[-100%]"
  } md:w-auto flex items-center px-5 w-full z-10`;
  const menuGeneral = `active:scale-95 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`;

  return (
    <header className="bg-black font-bold text-white h-[9vh] sm:h-[7vh]">
      <nav className="flex justify-between items-center  m-auto">
        <Link to={"/"}>
          <button className="flex gap-1 items-center justify-center sm:ml-12 ml-6">
            <img
              className="w-16 mt-0.5 invert"
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-kaar-carlos.appspot.com/o/eCommerce.svg?alt=media&token=9f3ae9f6-b4e7-4688-85ba-c598137b7547"
              srcSet={Ecommerce}
              alt="logo"
            />
            <img
              className="w-16 pr-4 h-[9vh] sm:h-[7vh] m-auto"
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-kaar-carlos.appspot.com/o/logo.jpg?alt=media&token=16928f16-85a0-42b4-ae9c-083ccc3617b2"
              srcSet={Logo}
              alt="logo"
            />
          </button>
        </Link>

        <div className={menuClass}>
          <ul
            onMouseLeave={plegarMenu}
            className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8 lg:pl-52 md:pr-20"
          >
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
          </ul>
        </div>

        <CartWidget />

        <div className="flex items-center gap-6">
          <ion-icon
            onClick={clickMenu}
            name={nombreIcono}
            class="cursor-pointer mr-4 text-3xl md:hidden "
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};
