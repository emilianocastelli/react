import React from "react";

export default function Item(props) {
    return(
        <div>
            <b>
                {props.name} -
                {props.marca} -
                {props.id}
            </b>
        </div>

    );

}
