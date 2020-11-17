import React  from "react";

import CartIcon from "./CartIcon/CartIcon";

const NavBar = (props) =>{
    return(
        <div className={"navBarHeader"}>
            <ul className={"navBar"}>
                <li><a href="">{props.home}</a></li>
                <li><a href="">{props.noticias}</a></li>
                <li><a href="">{props.multimedia}</a></li>
                <li><a href="">{props.nosotros}</a></li>
                <li><a href="">{props.contacto}</a></li>
            </ul>
            <CartIcon/>
        </div>

    );

}


export default NavBar;

