import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../context/CartContext";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartIcon = () => {
    const carrito = useContext(Cart);
    console.log(carrito);

    return(
        <Link to={"/cart"} style={{color:'white'}}>
            <div className={"iconCart"}>
                <p className={"cantidadCart"}>{carrito.cartSize}</p>
                <ShoppingCartIcon/>
            </div>
        </Link>

    );

}

export default CartIcon;