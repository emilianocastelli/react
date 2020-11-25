import CountContainer from "../components/Containers/CountContainer";
import React, {useState} from "react";

const ItemDetail = (props) => {
    const [cantidad, setCantidad] = useState(1);
    const onChange = (numero) =>{
        setCantidad(numero);
    }
    return (
        <div>
            {props.producto.name}
            {props.producto.id}
            <img src={props.producto.image} alt=""/>
            <CountContainer min={1} max={10} onChange={onChange}/>
            <div>
                <button type="button" className={"btn btn-primary btn-sm comprar"}>Comprar {cantidad}</button>
            </div>
        </div>
    )
}

export default ItemDetail;