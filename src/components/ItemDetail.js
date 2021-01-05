import CountContainer from "../components/Containers/CountContainer";
import React, {useContext, useState} from "react";
import { Cart } from "../context/CartContext";


const ItemDetail = (props) => {

    const carrito = useContext(Cart);

    const [cantidad, setCantidad] = useState(1);
    const onChange = (numero) =>{
        setCantidad(numero);
    }

    return (
        <div className={"row text-center m-0"}>
            <div className={"col-10"}>
                <div className={"container"}>
                    <img src={props.producto.image} className={"w-100"} alt=""/>
                    <div className={"card-body"}>
                        <h3>{props.producto.name}</h3>
                        <p className="card-text">{props.producto.descripcion}</p>
                        <div className={"container text-center"}>
                            <div className={"mt-5"}>
                                <CountContainer min={1} max={10} onChange={onChange}/>
                                <button
                                    type="button"
                                    className={"btn btn-primary btn-sm comprar mt-3"}
                                    onClick={()=>{
                                        carrito.addToCart({
                                            id: props.producto.id,
                                            name: props.producto.name,
                                            marca: props.producto.marca,
                                            image: props.producto.image,
                                            cantidad: cantidad,
                                            price: props.producto.price
                                        });
                                    }}>
                                        Comprar {cantidad}
                                </button> <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;