import { useState } from "react";

export const ItemDetail = ({ juego }) => {
  const [contador, setContador] = useState(0);
  const incrementarContador = () =>
    contador < juego.stock ? setContador(contador + 1) : contador;
  const decrementarContador = () =>
    contador > 0 ? setContador(contador - 1) : contador;
  const agregarCarrito = `mb-4 disabled:pointer-events-none disabled:opacity-65  bg-blue-700 sm:w-[75%] w-[55%] text-[12px] text-semibold  active:scale-95  m-auto px-4 py-2 rounded-md hover:bg-green-700  ${
    contador == 0 ? "block" : "hidden"
  }`;
  const cargadoCarrito = `text-white container m-auto mb-6 mt-3 ${
    contador === 0 ? "hidden" : "block"
  }`;

  const stock =
    juego.stock === 0 ? (
      <span className="text-red-500 font-bold">Agotado</span>
    ) : juego.stock <= 3 ? (
      <span className="text-red-500 font-bold">¡Últimas unidades!</span>
    ) : (
      <p className="text-end text-blue-400">Stock: {juego.stock}</p>
    );

  return (
    <div className="bg-white h-[50%] rounded-lg max-w-md m-auto">
      <img className="rounded-lg object-cover aspect-[1]" src={`../img/${juego.img}`} alt="" />

      <h1 className="text-black">{juego.nombre}</h1>
      
      <p className="text-left text-wrap  flex-1 text-black">
        {juego.descripcion}
      </p>

      <div className="text-center mt-2">{stock}</div>
      <button
        disabled={juego.stock === 0}
        className={agregarCarrito}
        onClick={incrementarContador}
      >
        Agregar al carrito
      </button>
      <section className={cargadoCarrito}>
        <div className="flex items-center justify-center space-x-4">
          <button
            className="bg-blue-700  active:scale-95  hover:bg-red-700 text-while px-4 rounded"
            onClick={decrementarContador}
          >
            -
          </button>
          <span className="text-xl font-bold text-black">{contador}</span>
          <button
            className="bg-blue-700  active:scale-95  hover:bg-green-700 text-while px-4 rounded"
            onClick={incrementarContador}
          >
            +
          </button>
        </div>
      </section>
    </div>
  );
};
