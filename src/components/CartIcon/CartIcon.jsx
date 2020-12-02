import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartIcon = () => {
    const carrito = useContext(CartContext);
    return(
        <Link to={"/cart"} style={{color:'white'}}>
            {carrito.length}
            <img src="/images/carritoIcon.png" alt="" className={"iconCart"} />
        </Link>

    );

}

export default CartIcon;