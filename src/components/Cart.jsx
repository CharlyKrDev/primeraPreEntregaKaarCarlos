import { Link } from "react-router-dom";
import WorkInProgress from "../../public/img/work-in-progress.jpg";
import { useCarritoContext } from "../context/CartContext";

export const Cart = () => {
  const { carrito, vaciarCarrito, precioTotalDeCompra } = useCarritoContext();
  return (
    <>
      {carrito.length === 0 ? (
        <>
          <h2 className="m-auto pr-8 mt-20 mb-20">
            APROVECHA ALGUNA DE NUESTRAS INCREÍBLES OFERTAS
          </h2>
          <Link to={"/"}>
            <button className="sm:bg-black opacity-80 border-2 sm:border-black mb-4 mt-4 p-2 hover:bg-white hover:font-bold hover:text-black">
              Volver inicio
            </button>
          </Link>
        </>
      ) : (
        <>
          <h1>Carrito lleno</h1>
        </>
      )}
    </>

    // <div className="flex flex-col min-h-[81.2vh]">
    // <h2 className="m-auto pr-8 mt-20 mb-20">APROVECHA ALGUNA DE NUESTRAS INCREÍBLES OFERTAS</h2>
    // <img className='max-h-[400px] max-w-[400px] m-auto invert' src={WorkInProgress} alt="trabajoEnProgreso" />
    // </div>
  );
};
