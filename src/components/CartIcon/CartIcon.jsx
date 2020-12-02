import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../context/CartContext";

const CartIcon = () => {
    const carrito = useContext(Cart);
    console.log(carrito);

    return(
        <Link to={"/cart"} style={{color:'white'}}>
            <div className={"iconCart"}>
                <p className={"cantidadCart"}>{carrito.cartSize}</p>
                <img src="/images/carritoIcon.png" alt="" />
            </div>
        </Link>

    );

}

export default CartIcon;