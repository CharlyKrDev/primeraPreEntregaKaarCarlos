import { useState, useEffect } from "react";
import { ItemList } from './ItemList'
import { useParams } from "react-router-dom";

import React from 'react'

export const ItemListContainer = () => {
    const [producto, setProductos] = useState([])
    const { cid } = useParams()

    console.log(cid)
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await fetch('../data/productos.json');
                const resultado = await respuesta.json();
                if(cid){

                    const productosFiltrados = resultado.filter( resp => resp.categoria.some(cat => cid.includes(cat)));
                    setProductos(productosFiltrados)

                } else{
                    setProductos(resultado)
                    console.log(resultado)
                }

            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()

    }, [cid])



    return (

        <>
            <section className="min-h-[100vh]">
                <h2 id='tienda' className="m-4 ml-12 text-[30px]">Tienda</h2>
                <div className='flex flex-wrap justify-center gap-2 m-auto w-[100%] h-[100%] pb-12'>



                    <ItemList productos={producto} plantilla='Item' />

                </div>
            </section>
        </>

    )
}
