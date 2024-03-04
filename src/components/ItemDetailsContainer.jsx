import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";




export const ItemDetailsContainer = () => {
  const [producto, setProducto]  = useState([]);

  const { pid } = useParams();

  useEffect(() => {
    const obtenerproducto = async () => {
      try {
        const respuesta = await fetch("../data/productos.json");
        const resultado = await respuesta.json();
        const productoFiltrado = resultado.find((resp) => resp.id == pid);
        if (productoFiltrado) {
          setProducto(productoFiltrado);
          console.log(productoFiltrado);
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerproducto();
}, [pid]);

  return (
<main className="sm:h-[82.3vh] h-auto min-h-[75vh] w-full flex pb-20">
<section className="flex flex-col m-auto justify-center items-center bg-black bg-opacity-50 h-[90%]  w-[auto] max-w-[50%] rounded-lg">
    <ItemDetail producto ={producto}/>
    </section>
</main>
  );
};
