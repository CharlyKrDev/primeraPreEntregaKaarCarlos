import { NavLink } from "react-router-dom";

export const Footer = () => {
  const botoneraRedes =
    "hover:scale-150 active:scale-95 ease-in-out transition-all";
  return (
    <footer className="flex w-full items-center bg-black h-[90px] fixed bottom-0 justify-between">
      <div>
        <button
          className={botoneraRedes}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <ion-icon
            class="m-auto text-3xl lg:ml-8 ml-2"
            name="arrow-up-circle-outline"
          ></ion-icon>
        </button>
      </div>

      <div className="flex justify-stretch w-[100%] flex-col">
        <h3 className="w-[100%] text-center bg-black text-white text-bold text-sm my-2">
          @COPYRIGHT 2024 - Tienda EcommerceGamer - Carlos Kr. ALL RIGHTS
          RESERVED.
        </h3>

        <section className="flex gap-4 text-lg justify-center items-center">
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

          <button className="fixed inset-y-[55%]  right-10 pointer-events-none">
            <NavLink to="https://www.whatsapp.com/" target="_blank">
              <ion-icon
                class="hover:scale-150 active:scale-95 ease-in-out transition-all text-3xl text-green-400  pointer-events-auto"
                name="logo-whatsapp"
              ></ion-icon>
            </NavLink>
          </button>
        </section>
      </div>
    </footer>
  );
};
