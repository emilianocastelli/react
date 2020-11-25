import React from "react";
import { Link } from "react-router-dom";
export default function Item(props) {
    return(
        <div>
          <div className={"card"}>
              <img src={props.image} alt=""/>
              <div className={"card-body"}>
                  <Link to={`/item/${props.id}`}> {props.name} </Link>
              </div>
          </div>
        </div>

    );

}
