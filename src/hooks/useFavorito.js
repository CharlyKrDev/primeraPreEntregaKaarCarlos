import { useState } from "react";

export const useFavorito = (icono = "heart-outline") => {
  const [iconNombre, useFavorito] = useState(icono);

  const agregarFavorito = () => {
    const nuevoFavorito =
      iconNombre === "heart-outline" ? "heart" : "heart-outline";
    console.log(nuevoFavorito);
    useFavorito(nuevoFavorito);
  };

  return { iconNombre, agregarFavorito };
};
