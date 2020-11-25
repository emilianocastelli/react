import React from "react";
import { Link } from "react-router-dom";
export default function Item(props) {
    return(
        <div>
            <Link to={`/item/${props.id}`}> {props.name} </Link>
            <b>
                {props.name} -
                {props.marca} -
                {props.id}
            </b>
        </div>

    );

}
