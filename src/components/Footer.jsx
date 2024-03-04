import { Link } from "react-router-dom";

export const Footer = () => {
  const botoneraRedes = "hover:scale-150 active:scale-95 ease-in-out transition-all"
  return (
    <footer className="flex w-full items-center bg-black h-[80px] fixed bottom-0 justify-between flex-col">
      <h3 className="w-[100%] text-center bg-black text-white text-bold text-sm mt-1">
        @COPYRIGHT 2024 - Tienda EcommerceGamer - Carlos Kr. ALL RIGHTS
        RESERVED.{" "}
      </h3>
      <section className="w-[100%] flex gap-4 text-lg mb-2 justify-center">
      <Link>
      <button  className= {botoneraRedes}>
          <ion-icon  name="logo-instagram"></ion-icon>
        </button>
      </Link>
      <Link>
      <button  className= {botoneraRedes}>
          <ion-icon name="logo-facebook"></ion-icon>
        </button>
      </Link>
      <Link>
      
      <button  className= {botoneraRedes}>
          <ion-icon name="logo-twitter"></ion-icon>
        </button>
      </Link>


      </section>
    </footer>
  );
};
