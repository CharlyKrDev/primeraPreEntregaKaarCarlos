import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";
import { toast } from "react-toastify";

export const Cart = () => {
  const { carrito, vaciarCarrito, precioTotalDeCompra } = useCarritoContext();

  const finalizarCompra = () => {
    toast.info(`Se ha vaciado el carrito`, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const botoneraCarrito = `active:scale-95 text-white bg-blue-700 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:scale-110 active:scale-95 ease-in-out transition-all`;
  const botoneraCarritoFinalizar = `active:scale-95 text-white bg-blue-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`;
  const botoneraCarritoComprar = `active:scale-95 text-white bg-blue-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`;

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
          <main className="h-auto bg-[#323232] w-[100%]">
            <section className=" flex flex-col m-auto h-auto">
              {<ItemList productos={carrito} plantilla="ItemCart" />}
            </section>
            <div className="h-[20%] pb-20  flex flex-col items-center mt-10">
              <h3>Resumen de la compra</h3>
              <p className="text-3xl mt-2">Total: $ {precioTotalDeCompra()}</p>

              <div className="flex gap-4 mt-4 pb-2 m-2">
                <Link to={"/tienda"}>
                  <button
                    className={botoneraCarritoFinalizar}
                    onClick={() => {
                      vaciarCarrito(), finalizarCompra();
                    }}
                  >
                    Vaciar carrito
                  </button>
                </Link>
                <Link to={"/tienda"}>
                  <button className={botoneraCarrito}>
                    Continuar comprando
                  </button>
                </Link>
                <Link to={"/checkout"}>
                  <button className={botoneraCarritoComprar}>
                    Finalizar compra
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};
