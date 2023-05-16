import { Link } from "react-router-dom";
//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: '20rem' }}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.material}</h5>
                <p className="card-text">material: {item.material}</p>
                <p className="card-text">precio: {item.precio}</p>
                <p className="card-text">stock: {item.stock}</p>
            </div>
            <footer>
                <button><Link className="nav-link" to={`/product/${item.id}`}>Ver Producto</Link></button>
            </footer>
        </div>
    );
}

