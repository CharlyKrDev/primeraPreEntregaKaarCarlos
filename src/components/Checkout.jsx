export const Checkout = () => {
const indicaciones = "text-center m-auto text-wrap text-sm font-bold"
const formularioLabel = "block mb-2 text-white"
const formularioInput = "w-[90%] p-2 m-4 border rounded-md"

    return (


    <main className="w-[90%] h-[100vh]  m-auto text-black">
        <section className="h-[100%] w-[100% flex flex-col ">
            <div className="sm:h-[25%] h-[auto] w-[100%] flex  p-2 text-white gap-2 bg-[#323232] rounded-3xl sm:rounded-full mt-8">
                <div className="h-[100%] w-[33.33%]  flex flex-col rounded-3xl sm:rounded-full border-2 border-blue-700 p-2 bg-green-600">
                    <h3 className="text-center font-bold">Paso 1:</h3>
                    <p className= {indicaciones}>Seleccionar los juegos deseados y agrégalos al carrito.</p>
                </div>
                <div className="h-[100%] w-[33.33%]  flex flex-col sm:rounded-full rounded-3xl border-2 border-blue-700 p-2 bg-yellow-600 ">
                <h3 className="text-center font-bold">Paso 2:</h3>
                <p className={indicaciones}>Completar los datos en el formulario e informar el código de gestión.</p>


                </div>
                <div className="h-[100%] w-[33.33%]  flex flex-col sm:rounded-full rounded-3xl border-2 border-blue-700 p-2 bg-purple-600">
                <h3 className="text-center font-bold">Paso 3:</h3>
                <p className={indicaciones}>Te vamos a estar contactando en la brevedad para finalizar la operación, en un periodo no mayor a las 72hrs hábiles.</p>


                </div>

            </div>
            <div className="w-[100%] pb-28">
                <div className="w-[90%] h-full m-auto pt-2shadow-md mt-2">
                    <h2 className="text-wrap text-center pt-2 pb-2 font-bold">Complete el siguiente formulario para finalizar la compra</h2>
                    <div className="max-w-md mx-auto p-6 bg-[#242424] rounded-lg border-blue-700 border-2 ">

                    <form  action="">
                        <label className={formularioLabel}>Nombres:</label>
                        <input type='text' required className={formularioInput}></input>
                        <label className={formularioLabel}>Apellido: </label>
                        <input type='text' required className={formularioInput}></input>
                        <label className={formularioLabel}>DNI: </label>
                        <input type='number' required className={formularioInput}></input>
                        <label className={formularioLabel}>Dirección: </label>
                        <input type='text' required className={formularioInput}></input>
                        <label className={formularioLabel}>E-mail: </label>
                        <input type='email' required className={formularioInput}></input>
                        <label className={formularioLabel}>Teléfono: </label>
                        <input type='number' required className={formularioInput}></input>
                        <label className={formularioLabel}>Código de gestión: </label>
                        <input type='text' required className={formularioInput}></input>
                        <button type="submit" className="m-auto active:scale-95 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center">Enviar</button>
                        
                    </form>

                        
                    </div>

                </div>

            </div>
        </section>
    </main>
   
    )
}


