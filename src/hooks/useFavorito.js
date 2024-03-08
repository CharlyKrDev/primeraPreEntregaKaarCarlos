import { useState } from "react";

export const useFavorito = (icono = "heart-outline") => {
  const [iconNombre, setIconNombre] = useState(icono);

  const agregarFavorito = () => {
    const nuevoFavorito =
      iconNombre === "heart-outline" ? "heart" : "heart-outline";
    console.log(nuevoFavorito);
    setIconNombre(nuevoFavorito);
  };

  return { iconNombre, agregarFavorito };
};
