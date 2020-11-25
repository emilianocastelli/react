import CountContainer from "../components/Containers/CountContainer";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const ItemDetail = (props) => {
    const [cantidad, setCantidad] = useState(1);
    const onChange = (numero) =>{
        setCantidad(numero);
    }
    return (
        <div className={"text-center"}>
            <div className={"card w-50 ml-5"}>
                <img src={props.producto.image} className={"w-100"} alt=""/>
                <div className={"card-body"}>
                    <h3>{props.producto.name}</h3>
                    <CountContainer min={1} max={10} onChange={onChange}/>
                    <div>
                        <button type="button" className={"btn btn-primary btn-sm comprar mt-5"}>Comprar {cantidad}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;