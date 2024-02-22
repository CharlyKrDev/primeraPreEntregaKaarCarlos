import WorkInProgress from "../../public/img/work-in-progress.jpg"

export const Cart = () => {
  return (

    <div className="flex flex-col min-h-[81.2vh]">
    <h2 className="m-auto pr-8 mt-20 mb-20">PRÓXIMAMENTE SE VIENE EL CARRITO</h2>
    <img className='max-h-[400px] max-w-[400px] m-auto invert' src={WorkInProgress} alt="trabajoEnProgreso" />
    </div>
  )
};
