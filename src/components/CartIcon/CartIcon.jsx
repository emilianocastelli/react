import React  from "react";
import { Link} from "react-router-dom";

const CartIcon = () => {
    return(
        <Link to={"/cart"}>
            <img src="/images/carritoIcon.png" alt="" className={"iconCart"} />
        </Link>

    );

}

export default CartIcon;