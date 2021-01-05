import React from "react";
import { Link } from "react-router-dom";
export default function Item(props) {
    return(
          <div className={"card"}>
              <div className={"card-body h-50"}>
                  <Link to={`/item/${props.id}`}>
                      <img src={props.image} className={"card-img-top"} alt=""/>
                      <h5 className="card-title">{props.name}</h5>
                      <h3 className="card-title">${props.price}</h3>
                  </Link>
              </div>
          </div>


    );

}
