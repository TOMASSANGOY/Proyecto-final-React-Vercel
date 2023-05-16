import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
//Consulto a mis productos de mi base de datos y se los envio a ItemLIts

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { category } = useParams()

    useEffect(() => {

        if(category) {  // Consulto si me ingresaron un parametro en la url
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                setProductos(productosFiltrados)
            })
        } else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0)
                setProductos(productosFiltrados)

            })
        }

    }, [category]) //cada vez que se modifica la categoria

    return (
        <div class="row">
            {<ItemList productos={productos} plantilla={"item"} />}
        </div>
    );
}

