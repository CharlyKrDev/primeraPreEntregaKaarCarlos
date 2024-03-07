import React from "react";
import Portada from "../img/portada.jpg";
import { WelcomeTyping } from "./WelcomeTyping";
export const LandingPage = () => {
  return (
    <>
      <main className="bg-black ">
        <section className="flex flex-col text-white items-center justify-center bg-[#242424] min-h-[27.2vh] box-content w-auto h-auto border-4">
          CARRUSEL
        </section>
        <section className="md:flex justify-center sm:h-[54.5vh] h-full ml-6">
          <article className="flex flex-col text-center md:m-4 m-auto w-[40%]">
            <h1 className="font-bold sm:m-auto">
              <WelcomeTyping />
            </h1>
            <p className="sm:m-auto m-auto mt-6 mb-6 text-center text-lg">
              En nuestra web no solo vas a encontrar los <strong>juegos</strong>{" "}
              más actuales del mercado, sino que también vas a poder ser parte
              de una de las comunidades <strong>gamers</strong> más importantes!
            </p>
          </article>
          <picture className="flex flex-col w-[60%] m-auto items-center pb-20">
            <img
              className="bg-white max-h-[55vh] m-auto"
              srcSet={Portada}
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-kaar-carlos.appspot.com/o/portada.jpg?alt=media&token=329158ec-4a7d-462b-a052-a8877e95a756"
              alt="portada"
            />
          </picture>
        </section>
      </main>
    </>
  );
};
