import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../firebase/firebase";

export const ItemDetailsContainer = () => {
  const [producto, setProducto] = useState([]);

  const { pid } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await getProduct(pid);
        if (respuesta) {
          setProducto(respuesta);
          console.log(respuesta);
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProducto();
  }, [pid]);

  return (
    <main className="sm:h-[82.3vh] h-auto min-h-[75vh] w-full flex pb-20">
      <section className="flex flex-col m-auto justify-center items-center bg-black bg-opacity-50 h-[90%]  w-[auto] max-w-[50%] rounded-lg">
        <ItemDetail producto={producto} />
      </section>
    </main>
  );
};
