import { NavLink } from "react-router-dom";

export const Footer = () => {
  const botoneraRedes =
    "hover:scale-150 active:scale-95 ease-in-out transition-all";
  return (
    <footer className="flex w-full items-center bg-black h-[80px] fixed bottom-0 justify-between flex-col">
      <h3 className="w-[100%] text-center bg-black text-white text-bold text-sm my-2">
        @COPYRIGHT 2024 - Tienda EcommerceGamer - Carlos Kr. ALL RIGHTS
        RESERVED.
      </h3>
      <div className="flex justify-stretch w-[100%]">
        <div>
          <button
            className={botoneraRedes}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <ion-icon
              class="ml-8 text-3xl"
              name="arrow-up-circle-outline"
            ></ion-icon>
          </button>
        </div>
        <section className="w-[100%] flex gap-4 text-lg justify-center">
          <NavLink to="https://www.instagram.com/" target="_blank">
            <button className={botoneraRedes}>
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
          </NavLink>
          <NavLink to="https://www.facebook.com/" target="_blank">
            <button className={botoneraRedes}>
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
          </NavLink>
          <NavLink to="https://www.twitter.com/" target="_blank">
            <button className={botoneraRedes}>
              <ion-icon name="logo-twitter"></ion-icon>
            </button>
          </NavLink>

          <NavLink to="https://www.whatsapp.com/" target="_blank">
            <button className="hover:scale-150 active:scale-95 ease-in-out transition-all fixed inset-y-0 right-10 text-3xl text-green-400">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </button>
          </NavLink>
        </section>
      </div>
    </footer>
  );
};
