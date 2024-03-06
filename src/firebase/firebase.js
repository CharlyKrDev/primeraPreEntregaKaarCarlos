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

// con la siguientes funciones creo/transfiero los productos en la bdd, con el fs.readFile accedo al json en el entorno de node.js, es como el fetch pero en node, ahi genero un productos y luego lo recorro con for of y genero una copia en la base de datos (db)
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

// Ya subimos los productos, ahora los consultamos desde la db, la 1era etapa devuelve un objeto de firebase con sus elementos, usamos el .map en el objeto.doc (.doc pq tenemos que acceder a la totalidad de los documentos del objeto, que de carácter complejo, es algo propio de firebase) para generar una copia con todos los elementos tal cual necesitamos, en un objeto de carácter simple.
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

//la dinámica es la misma, pero aca trabajos solo sobre 1 item en base a la id, por eso cambiamos collection por doc y getDocs por getDoc en singular y sumamos a la consulta el id que queremos obtener.
export const getProduct = async (id) => {
    try {
        const producto = await getDoc(doc(db, "productos", id))
        const item = { ...producto.data(), id: producto.id }
        console.log('probando')
        return item

    } catch (error) {

        console.error("Error al consultar productos:", error);



    }


}

// para actualizar los productos, necesitamos dos elementos obligatoriamente, el ID para reconocer el elemento y INFO, que es el valor que queremos modificar.

export const updateProduct = async (id, info) => {
    const respuesta = await updateDoc(doc(db, "productos", id), info)
    return respuesta

}

//Eliminar producto

export const deleteProducto = async (id) => {

    const respuesta = await deleteDoc(doc(db, "productos", id), info)
    return respuesta


}
//ejemplo de como actualizar un producto
// updateProduct("1LeKvC1USQFiId9EMHe8", {
//     'precio':155
// }) .then(rest => console.log(rta)) debe devolver undefined para confirmar que se cargo la actualizacion

//con deleteProduct("acaIngresamosElID") y elimina el producto

//Como crear y leer ordenes de compras

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