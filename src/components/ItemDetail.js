import React from "react";
import CountContainer from "../components/Containers/CountContainer";

const ItemDetail = (props) => {
    return (
        <div>
            {props.producto.name}
            {props.producto.id}
            <CountContainer min="0" max={"10"}/>
        </div>
    )
}

export default ItemDetail;