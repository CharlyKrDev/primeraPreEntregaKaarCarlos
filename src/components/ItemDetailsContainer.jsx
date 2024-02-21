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
<main className="h-[80.3vh] w-full flex">
<section className="flex m-auto justify-center justify-items-center items-center bg-black bg-opacity-50 h-[60vh]">
    <ItemDetail juego ={juego}/>
    </section>
</main>
  );
};
