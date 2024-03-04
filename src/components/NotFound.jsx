import React from "react";
import { Link } from "react-router-dom";


export const NotFound = () => {
  return (
      <section className='flex flex-col h-[60.3vh] w-[40vh] sm:w-[60vh] justify-end items-center m-auto bg-[url("../../public/img/404.jpg")] bg-contain bg-no-repeat'>
        <h2 className="bg-black opacity-80">Pagina NO ENCONTRADA ERROR: 404</h2>

        <Link to={"/"} >
      <button className="sm:bg-black opacity-80 border-2 sm:border-black mb-4 mt-4 p-2 hover:bg-white hover:font-bold hover:text-black">
        Volver inicio
      </button>
      </Link>
      </section>
  );
};
