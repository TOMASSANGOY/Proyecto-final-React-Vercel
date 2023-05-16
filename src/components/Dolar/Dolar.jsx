import { useState, useEffect } from 'react';

export const Dolar = () => {
    const [dolar, setDolar] = useState([]) //Sin valor inicial

    useEffect(() => { //Dentro de esta funcion establezco un control de mi estado
        fetch("https://criptoya.com/api/dolar")
        .then(response => response.json())     //Cuando me conecte correctamente a criptoya y me devuelva los datos
        .then(dolar => {
            console.log(dolar);
            setDolar(dolar); //Definir que el state sea igual a dolar
        })
    }, [])

    /* 
    [] cuando se modifique el contenido de mi estado, actualizo
    [prop] cuando se modifique el contenido dentro de mi estado, actualizado (ej: ordenamiento del array, modificacion de propiedades)

    */
 
    return (
        <div>
            <p>Solidario: {dolar.solidario}</p>
            <p>Blue: {dolar.blue}</p>
        </div>
    );
}

