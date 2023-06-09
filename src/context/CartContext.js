import { useState, createContext, useContext } from "react";

const CarritoContext = createContext() //creo mi cintexto
 
export const useCarritoContext = () => useContext(CarritoContext) //Creo una funcion para poder consultar mi contexto

export const CarritoProvider = (props) => { //forma de proveer el contexto en mi app, puede recibir prop si es necesario

    const [carrito, setCarrito] = useState([]); //creo una variable para guardar el contexto en el componente

    //Agregar producto - Quitar producto - Vaciar carrito
    //Obtener cantidad - Obtener precio total - Buscar producto

    const isInCart = (id) => {
        //Find => Obj - Some => Booleano
        return carrito.some(prod => prod.id === id) //V o F
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) { //Consulto siu el producto existe o no en el carrito
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = quantity
            setCarrito(aux)
        } else {
            // Creo un nuevo objeto con los datos ingresados
            const newItem = {
                ...item,
                quantity: quantity //Si agrego directamente el parametro se queda con el mismo nombre 
            }
            /* // Genero un aux que es igual al carrito para poder hacer el push
            const aux = carrito
            aux.push(newItem)
            setCarrito(aux)  */
            setCarrito([...carrito, newItem]) //Genero una copia del carrito mas el nuevo producto
        }
    }

    const removeItem = (id) => {
       /*  const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        setCarrito(aux.splice(indice,1)) */

        //Traeme todos los productos que no tengan el id ingresado
        setCarrito(carrito.filter(prod => prod.id !==id))
    }
    
    const emptyCart = () => {
        setCarrito([])
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, totalPrice, getItemQuantity}}>
            {props.children}
        </CarritoContext.Provider>
    )

}
