import React from "react";


export default function Count({contador, onAdd}) {
    return(
       <div className={"count"}>
           <button type="button" className="btn btn-danger mr-3 pl-3 pr-3" onClick={() => onAdd("-")} > - </button>
           <div className={"mt-2"}>{contador} </div>
           <button type="button" className="btn btn-success ml-3 pl-3 pr-3" onClick={() => onAdd("+")}>+</button>

       </div>
    );

}
