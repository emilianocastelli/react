import CountContainer from "../components/Containers/CountContainer";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const ItemDetail = (props) => {
    const [cantidad, setCantidad] = useState(1);
    const onChange = (numero) =>{
        setCantidad(numero);
    }
    return (
            <div className={"row text-center"}>
                <div className={"col-8 offset-2"}>
                    <div className={"container"}>
                        <img src={props.producto.image} className={"w-100"} alt=""/>
                        <div className={"card-body"}>
                            <h3>{props.producto.name}</h3>
                            <p className="card-text">{props.producto.descripcion}</p>
                            <div className={"container text-center"}>
                                <div className={"mt-5"}>
                                    <CountContainer min={1} max={10} onChange={onChange}/>
                                    <button type="button" className={"btn btn-primary btn-sm comprar mt-3"}>Comprar {cantidad}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail;