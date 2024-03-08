import React from "react";
import Portada from "../img/portada.jpg";
import { WelcomeTyping } from "./WelcomeTyping";
export const LandingPage = () => {
  return (
    <>
      <main className="bg-black h-[80vh] m-auto">
        <section className="md:flex justify-center sm:h-[100%] h-full m-auto">
          <article className="flex flex-col text-center md:m-4 m-auto md:w-[40%] w-[100%] px-4">
            <h1 className="font-bold sm:m-auto mt-2">
              <WelcomeTyping message="Bienvenid@ a tu tienda gamer amiga!" />
            </h1>
            <p className="mt-6 mb-6 text-center text-lg  text-wrap  ">
              En nuestra web no solo vas a encontrar los <strong>juegos</strong>{" "}
              más actuales del mercado, sino que también vas a poder ser parte
              de una de las comunidades <strong>gamers</strong> más importantes!
            </p>
          </article>
          <picture className="flex w-[60%] justify-center m-auto lg:pt-32 sm:pt-0 ">
            <img
              className="bg-white max-h-[55vh] aspect-auto "
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
