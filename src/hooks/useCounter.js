import { useState } from "react";


export const useContador = (valorMinimo = 0, valorMax = 1, step = 1) =>{
    const [ contador, setContador] = useState(valorMinimo)

    const incrementarContador = ()=>{
        if( contador + step <= valorMax){
            setContador( contador + step )
        }

    }
    const decrementarContador = () =>{
        if( contador > valorMinimo){
            setContador( contador - step)
        }

    }

    const reiniciarContador =()=>{

        setContador( valorMinimo )
    }


    return {contador, incrementarContador, decrementarContador, reiniciarContador }


}