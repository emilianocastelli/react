import React, {useContext} from "react";
import { Cart } from "../../context/CartContext";
import Item from "../Item";

const CartContainers = () => {

    const carrito = useContext(Cart);

    return(
        <div className={"container text-center"}>
            <h1 className={"mt-5"}>Carrito ({carrito.cartSize})</h1>
            {carrito.cart.map((prod)=>
                <div>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <Item name={prod.name} marca={prod.marca} image={prod.image} id={prod.id} />
                    <hr/>
                </div>
            )}
        </div>
    );

}

export default CartContainers;