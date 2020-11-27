import React from "react";


export default function Count({contador, onAdd}) {
    return(
       <div className={"count mt-3"}>
           <button type="button" className="btn btn-danger  pl-3 pr-3" onClick={() => onAdd("-")} > - </button>
           <div className={"mt-2"}>{contador} </div>
           <button type="button" className="btn btn-success pl-3 pr-3" onClick={() => onAdd("+")}>+</button>
       </div>
    );

}
