import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import fs from "fs/promises";

const firebaseConfig = {
    apiKey: "AIzaSyAv-wM_dFFE-IEzhKUDrw26PlqeP-RG66M",
    authDomain: "proyecto-final-kaar-carlos.firebaseapp.com",
    projectId: "proyecto-final-kaar-carlos",
    storageBucket: "proyecto-final-kaar-carlos.appspot.com",
    messagingSenderId: "730482707161",
    appId: "1:730482707161:web:a0ab63d77f965ce0948cc8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const createProducts = async () => {

    try {
        const data = await fs.readFile('./public/data/productos.json', 'utf8');
        const productos = JSON.parse(data);

        for (const prod of productos) {
            await addDoc(collection(db, 'productos'), {
                nombre: prod.nombre,
                img: prod.img,
                precio: prod.precio,
                descripcion: prod.descripcion,
                categoria: prod.categoria,
                promocion: prod.promocion,
                descuento: prod.descuento,
                stock: prod.stock
            });
        }

        console.log("Productos creados exitosamente en la base de datos.");
    } catch (error) {
        console.error("Error al crear productos:", error);
    }
};

export const getProducts = async () => {
    try {
        const productos = await getDocs(collection(db, "productos"))
        const items = productos.docs.map(producto => {
            return { ...producto.data(), id: producto.id }
        })
        return items

    } catch (error) {

        console.error("Error al consultar productos:", error);

    }

}

export const getProduct = async (id) => {
    try {
        const producto = await getDoc(doc(db, "productos", id))
        const item = { ...producto.data(), id: producto.id }
        return item

    } catch (error) {

        console.error("Error al consultar productos:", error);



    }


}


export const updateProduct = async (id, info) => {
    const respuesta = await updateDoc(doc(db, "productos", id), info)
    return respuesta

}


export const deleteProducto = async (id) => {

    const respuesta = await deleteDoc(doc(db, "productos", id), info)
    return respuesta


}



export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {

    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {

    const ordenCompra = await getDoc(doc(db, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item

}