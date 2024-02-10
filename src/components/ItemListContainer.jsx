import { useState, useEffect } from "react";
import { ItemList } from './ItemList'


import React from 'react'

export const ItemListContainer = () => {
    const [producto, setProductos] = useState([])
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch('./data/productos.json');
                const result = await response.json();
                setProductos(result)
                console.log(result)


            } catch (error) {
                console.log(Error)
            }
        }
        obtenerProductos()

    }, [])



    return (

        <>
            <section>
                <h2 id='tienda' className="m-4 text-[30px] mb-7">Tienda</h2>
                <div className='flex flex-wrap justify-center gap-2 m-auto w-[100%]'>



                    <ItemList productos={producto} />

                </div>
            </section>
        </>

    )
}
