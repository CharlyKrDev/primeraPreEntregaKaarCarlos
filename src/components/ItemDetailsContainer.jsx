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
    <div className="mt-10 ustify-items-center items-center bg-black bg-opacity-50">
    <ItemDetail juego ={juego}/>
    </div>
  );
};
