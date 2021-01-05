import React  from "react";
import { Link} from "react-router-dom";

import CartIcon from "./CartIcon/CartIcon";

const NavBar = (props) =>{
    return(
        <div className={"navBarHeader"}>
            <ul className={"navBar"}>
                <li className={"text-uppercase"}>
                    <Link to={"/"}>{props.home}</Link>
                </li>

                <li className={"text-uppercase"}>
                    <Link to={"/items"}>{props.items}</Link>
                </li>
            </ul>
            <CartIcon/>
        </div>

    );

}


export default NavBar;

