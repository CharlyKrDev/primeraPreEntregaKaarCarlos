import { useRef } from "react"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase"
import { Link, useNavigate } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"




export const Checkout = () => {
const indicaciones = "text-center m-auto text-wrap text-sm font-bold"
const formularioLabel = "block mb-2 text-white"
const formularioInput = "w-[90%] p-2 m-4 border rounded-md"
const formRef = useRef()
const navigate = useNavigate()
const {carrito, precioTotalDeCompra, vaciarCarrito } = useCarritoContext()

const handleSubmit =(e)=>{ // estoy convirtiendo información html a un objeto iterator y luego a uno simple
    e.preventDefault()
    const datForm = new FormData(formRef.current) // objeto iterator
    const data = Object.fromEntries(datForm) // objeto iterator
 
    // Generar la orden de compra

    //Modificar Stock
    const aux =[...carrito] //genero una copia del carrito en aux por medio de spread, la idea es modificar este y no el original
    aux.forEach(prodCarrito) =>{
        getProduct(prodCarrito.id).then(prodDB =>{
            if(prodDB.stock >= prodCarrito.unidad){
                prodDB.stock -= prodCarrito.unidad
                updateProduct(prodDB.id, prodDB)

            } else{
                console.log(`El stock del producto ${prodDB.nombre} no cuenta con stock suficiente`)
                aux.filter(prod => prod.id != prodDB.id) //Elimino el producto del carrito que no tenga stock

            }

        })

    }


    e.target.reset() //resetea el formulario despues de ser usado.

}


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

                    <form  action="" ref={formRef} onSubmit={handleSubmit}>
                        <label className={formularioLabel}>Nombres:</label>
                        <input type='text' required className={formularioInput} name='nombre'></input>
                        <label className={formularioLabel}>Apellido: </label>
                        <input type='text' required className={formularioInput} name='apellido'></input>
                        <label className={formularioLabel}>DNI: </label>
                        <input type='number' required className={formularioInput} name='dni'></input>
                        <label className={formularioLabel}>Dirección: </label>
                        <input type='text' required className={formularioInput} name='direccion'></input>
                        <label className={formularioLabel}>E-mail: </label>
                        <input type='email' required className={formularioInput} name='email'></input>
                        <label className={formularioLabel}>Teléfono: </label>
                        <input type='number' required className={formularioInput} name='telefono'></input>
                        <label className={formularioLabel}>Código de gestión: </label>
                        <input type='text' required className={formularioInput} name='codigo'></input>
                        <button type="submit" className="m-auto active:scale-95 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center">Enviar</button>
                        
                    </form>

                        
                    </div>

                </div>

            </div>
        </section>
    </main>
   
    )
}


