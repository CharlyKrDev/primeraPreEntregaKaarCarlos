import React from "react";
import { useCarritoContext } from "../context/CartContext";
import { useContador } from "../hooks/useCounter";

export const ItemCart = ({ prod }) => {
  const { removerProducto, agregarProducto } = useCarritoContext();
  const { contador, incrementarContador, decrementarContador } = useContador(
    prod.unidad,
    prod.stock,
    1
  );

  const precioConDescuento = prod.precio * prod.descuento;

  const precioTotal =
    prod.promocion === true
      ? contador * precioConDescuento
      : prod.precio * contador;

  return (
    <section className="bg-[#242424] flex border-2 m-auto my-2 w-[100%] j">
      <div className=" flex flex-col items-center w-[40%] ">
        <div className="w-[100%]">
          <h3 className="text-lg text-center font-semibold">{prod.nombre}</h3>

          <img
            className="w-[100%] h-40 aspect-[1] object-contain"
            src={`${prod.img}`}
            alt={`prod ${prod.nombre}`}
          />
          <p className="w-[100%] text-center">{prod.descripcion}</p>
        </div>
      </div>
      <div className="flex sm:h-[50%] m-auto items-center justify-center space-x-2 w-[100%]">
        <button
          className="bg-blue-700  active:scale-95  hover:bg-red-700 text-while px-4 rounded mx-2 my-6"
          onClick={() => {
            decrementarContador();
            agregarProducto(prod, contador == 1 ? contador : contador - 1);
          }}
        >
          -
        </button>
        <span className="text-xl font-bold pr-2">{contador}</span>
        <button
          className="bg-blue-700  active:scale-95  hover:bg-green-700 text-while px-4 rounded "
          onClick={() => {
            incrementarContador();
            agregarProducto(
              prod,
              contador == prod.stock ? contador : contador + 1
            );
          }}
        >
          +
        </button>
        <button
          onClick={() => removerProducto(prod.id)}
          className="active:scale-95 bg-red-800 rounded-lg text-center p-1 flex text-xl"
        >
          <ion-icon name="trash-outline">Borrar</ion-icon>
        </button>
      </div>
      <div className="w-[100%] flex items-center">
        <p className="w-[100%] text-lg semi-bold text-center mx-2">
          Subtotal: ${precioTotal}
        </p>
      </div>
    </section>
  );
};
