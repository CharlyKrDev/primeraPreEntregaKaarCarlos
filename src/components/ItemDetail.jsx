import { useState } from "react";

export const ItemDetail = ({ juego }) => {
  const [contador, setContador] = useState(0);
  const incrementarContador = () =>
    contador < juego.stock ? setContador(contador + 1) : contador;
  const decrementarContador = () =>
    contador > 0 ? setContador(contador - 1) : contador;
  const borrar =()=>{setContador(0)}
  const agregarCarrito = `disabled:pointer-events-none disabled:opacity-65  bg-blue-700 sm:w-[45%] w-[75%] sm:text-[13px] text-semibold  active:scale-95  m-auto px-4 py-2 rounded-md hover:bg-green-700  ${
    contador == 0 ? "block" : "hidden"
  }`;
  const cargadoCarrito = `text-white container sm:m-auto mb-6 mt-3 ${
    contador === 0 ? "hidden" : "block"
  }`;
  const promocionActiva =
    juego.promocion === true ? (
      <span className="text-green-400 text-[20px]">10% Desc</span>
    ) : (
      ""
    );
  const precioConDescuento =
    juego.precioVigente - (juego.precioVigente * juego.descuento) / 100;
  const aplicandoPromocion =
    juego.promocion === true ? (
      <span className="text-green-400 mr-1 font-bold text-[16px] duration-200 ease-in-out hover:text-[20px] ">
        <span className="text-[14px] text-red-400 line-through mr-1">
          ${juego.precioVigente}
        </span>
        ${precioConDescuento}
      </span>
    ) : (
      <span className="duration-200 ease-in-out hover:text-[20px] text-gray-300 hover:text-white hover:font-bold">
        ${juego.precioVigente}
      </span>
    );

  const stock =
    juego.stock === 0 ? (
      <span className="text-red-500 font-bold">Agotado</span>
    ) : juego.stock <= 3 ? (
      <span className="text-red-500 font-bold">¡Últimas unidades!</span>
    ) : (
      <p className="text-end text-blue-200 mr-4 mb-1">Stock: {juego.stock}</p>
    );

  return (
    <section className="bg-[#313131] border-2 border-sky-100 opacity-80 h-[100%] rounded-lg max-w-[50%] m-auto">
      <div className="flex h-[5%] rounded-lg">
        <h2 className="text-white text-lg font-bold text-center m-auto">{juego.nombre}</h2>
      </div>
      <div className="h-[40%]">
        <img
          className="m-auto rounded-lg object-cover aspect-[.7] max-h-[100%]"
          src={`../img/${juego.img}`}
          alt=""
        />
      </div>
      <div className="h-[55%] flex flex-col justify-between mb-1">
        <div className="h-[50%]">
          <p className="text-left text-wrap  flex-1 text-white mt-4 mx-4">
            {juego.descripcion}
          </p>
          <h3 className="text-center mt-2">{stock}</h3>
          <div className="flex flex-col items-center">
          <span className="mb-4 ml-4 flex justify-between items-center">
            {aplicandoPromocion}
          </span>
          <span className="">{promocionActiva}<p>Precio total: ${precioConDescuento * contador}</p></span>
          </div>

        </div>
        <div className="sm:h-[50%] h-[20%] flex rounded-lg">
    <button
            disabled={juego.stock === 0}
            className={agregarCarrito}
            onClick={incrementarContador}
          >
            Agregar al carrito
          </button>

  
          <section className={cargadoCarrito}>
            <div className="flex sm:h-[50%] m-auto items-center justify-center space-x-4 flex-wrap">
              <button
                className="bg-blue-700  active:scale-95  hover:bg-red-700 text-while px-4 rounded"
                onClick={decrementarContador}
              >
                -
              </button>
              <span className="text-xl font-bold">{contador}</span>
              <button
                className="bg-blue-700  active:scale-95  hover:bg-green-700 text-while px-4 rounded"
                onClick={incrementarContador}
              >
                +
              </button>
              <button onClick={borrar} className="active:scale-95 bg-red-800 rounded-lg text-center p-1 flex text-2xl"><ion-icon name="trash-outline">Borrar</ion-icon></button>
              <button  className="active:scale-95 bg-green-800 rounded-lg text-center p-1 flex text-2xl"><ion-icon name="cash-outline">Comprar</ion-icon></button>

            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
