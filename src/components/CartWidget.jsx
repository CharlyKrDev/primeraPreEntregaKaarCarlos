import { Link } from "react-router-dom";
import Carrito from "../../public/img/carrito.png";

export const CartWidget = () => {
  return (

    <>
    <Link to = {'/carrito'}>


    <button
      className=" sm:mr-20 flex gap-1 fixed end-0 top-5 md:top-3 sm:top-4 mr-10 sm:mr-8 bg-black rounded-lg z-10 opacity-70 "
      
    >
      <img className="w-8 sm:w-10 invert sm:mr-4 mr-0 " src={Carrito} alt="carrito" />
      <span className="bg-blue-700 text-white text-center rounded-lg h-6 px-2 mr-6 mt-1">0</span>
    </button>
    
    
    </Link>

    </>

  );
};
