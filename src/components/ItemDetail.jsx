import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContador } from "../hooks/useCounter.js";
import { useCarritoContext } from "../context/CartContext";


export const ItemDetail = ({ juego }) => {
  const { agregarProducto } = useCarritoContext()
  const { contador, incrementarContador, decrementarContador, reiniciarContador } = useContador (0, juego.stock, 1)
  
  const sumarCarrito = () =>{
    agregarProducto( juego,contador )

  }

  const finalizarCarrito = () => {
    const codigoAleatorio = Math.random().toString(36).substring(2);
    Swal.fire({
      title: "Reserva realizada!",
      text: `Complete el formulario para ser contactado y cargue el código: ${codigoAleatorio} `,
      icon: "success",
      confirmButtonText: "Confirmar",
    });
  };

  const agregarCarrito = "disabled:pointer-events-none disabled:opacity-65  bg-blue-700 sm:w-[45%] w-[85%] sm:text-[13px] text-sm text-semibold  active:scale-95  m-auto px-4 py-2 rounded-md hover:bg-green-700";
  const cargadoCarrito = "flex text-white container sm:m-auto mb-2 mt-2 h-[100%]";
  const promocionActiva =
    juego.promocion === true ? (
      <span className="text-green-400 text-[20px]">10% Desc</span>
    ) : (
      ""
    );
  const precioConDescuento =
    juego.precio - (juego.precio * juego.descuento) / 100;
  const aplicandoPromocion =
    juego.promocion === true ? (
      <span className="text-green-400 mr-1 font-bold text-[16px] duration-200 ease-in-out hover:text-[20px] ">
        <span className="text-[14px] text-red-400 line-through mr-1">
          ${juego.precio}
        </span>
        ${precioConDescuento}
      </span>
    ) : (
      <span className="duration-200 ease-in-out hover:text-[20px] text-gray-300 hover:text-white hover:font-bold">
        ${juego.precio}
      </span>
    );
  const precioTotal =
    juego.promocion === true
      ? contador * precioConDescuento
      : juego.precio * contador;

  const stock =
    juego.stock === 0 ? (
      <span className="text-red-500 font-bold">Agotado</span>
    ) : juego.stock <= 3 ? (
      <span className="text-red-500 font-bold">¡Últimas unidades!</span>
    ) : (
      <p className="text-end text-blue-200 mr-4 mb-1">Stock: {juego.stock}</p>
    );

  return (
    <>
      <div className="bg-[#313131] pt-2 pb-2 h-[100%]  min-w-[90%] sm:w-[90%] rounded-lg border-4 border-sky-50">
        <section className="h-[40%]  w-[100%]">
          <div className="h-[15%] bg-[#535252] flex items-center justify-between mb-1">
            <h3 className="text-center w-[70%] m-auto ">{juego.nombre}</h3>
            <Link to={"/tienda"}>
              <button className="active:scale-95 bg-red-800 rounded-lg text-center p-1 flex text-md mr-1">
                <ion-icon name="close">Comprar</ion-icon>
              </button>
            </Link>
          </div>
          <div className="h-[80%]">
            <img
              className="m-auto w-[90%] h-[100%] object-contain mt-4 aspect-[1]"
              src={`../img/${juego.img}`}
              alt={`${juego.nombre}`}
            />
          </div>
        </section>
        <section className="h-[50%]  w-[80%] m-auto ">
          <div className="h-[60%] mt-8 flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <p className="mx-2 my-2 text-left text-wrap text-white">
                {juego.descripcion}
              </p>
              <h3 className="text-center text-sm mt-1">{stock}</h3>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <span className="m-1 text-m flex justify-between items-center">
                  {aplicandoPromocion}
                </span>
                <span className="">
                  {promocionActiva}
                  <p>Precio total: ${precioTotal}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="h-[40%] m-auto flex w-[100%] flex-col">
          <section className={cargadoCarrito}>
              <div className="flex sm:h-[50%] m-auto items-center justify-center space-x-2 w-[100%]">
                <button
                  className="bg-blue-700  active:scale-95  hover:bg-red-700 text-while px-4 rounded mx-2 my-6"
                  onClick={decrementarContador}
                >
                  -
                </button>
                <span className="text-xl font-bold">{contador}</span>
                <button
                  className="bg-blue-700  active:scale-95  hover:bg-green-700 text-while px-4 rounded "
                  onClick={incrementarContador}
                >
                  +
                </button>
                <button
                  onClick={reiniciarContador}
                  className="active:scale-95 bg-red-800 rounded-lg text-center p-1 flex text-xl"
                >
                  <ion-icon name="trash-outline">Borrar</ion-icon>
                </button>
                {/* <Link to={"/checkout"}>
                  <button
                    onClick={finalizarCarrito}
                    className="active:scale-95 bg-green-800 rounded-lg text-center p-1 flex text-xl mr-2"
                  >
                    <ion-icon name="cash-outline">Comprar</ion-icon>
                  </button>
                </Link> */}
              </div>
            </section>
            <div className="h-[10%] w-[98%] flex mb-4 ml-1">
            <button
              disabled={juego.stock === 0}
              className={agregarCarrito}
              onClick={sumarCarrito}
            >
              Agregar al carrito
            </button>

            </div>

 
          </div>
        </section>
      </div>
    </>
  );
};
