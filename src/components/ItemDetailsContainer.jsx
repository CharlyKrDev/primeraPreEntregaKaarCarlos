import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";




export const ItemDetailsContainer = () => {
  const [juego, setJuego]  = useState([]);

  const { pid } = useParams();

  useEffect(() => {
    const obtenerJuego = async () => {
      try {
        const respuesta = await fetch("../data/productos.json");
        const resultado = await respuesta.json();
        const juegoFiltrado = resultado.find((resp) => resp.id == pid);
        if (juegoFiltrado) {
          setJuego(juegoFiltrado);
          console.log(juegoFiltrado);
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerJuego();
}, [pid]);

  return (
<main className="sm:h-[82.3vh] h-auto min-h-[75vh] w-full flex">
<section className="flex flex-col m-auto justify-center items-center bg-black bg-opacity-50 h-[90%]  w-[auto] max-w-[50%] rounded-lg">
    <ItemDetail juego ={juego}/>
    </section>
</main>
  );
};
