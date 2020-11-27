import React from "react";
import { Link } from "react-router-dom";
export default function Item(props) {
    return(
        <div className={"col-6 col-md-4 p-3"}>
          <div className={"card"}>
              <div className={"card-body h-50"}>
                  <Link to={`/item/${props.id}`}>
                      <img src={props.image} className={"card-img-top"} alt=""/>
                      <h5 className="card-title">{props.name}</h5>
                  </Link>
              </div>
          </div>
        </div>

    );

}
