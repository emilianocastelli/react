import React from "react";


export default function Count({contador, onAdd}) {
    return(
       <div className={"text-center mt-3"}>
           <div className="btn-group" role="group" aria-label="Basic mixed styles example">
               <button type="button" className="btn btn-danger" onClick={() => onAdd("-")}>-</button>
               <button type="button" className="btn btn-warning btn-product-select">{contador}</button>
               <button type="button" className="btn btn-success" onClick={() => onAdd("+")}>+</button>
           </div>
       </div>
    );

}
