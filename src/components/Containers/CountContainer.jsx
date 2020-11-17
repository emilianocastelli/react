import React, {useState}  from "react";
import Count from "../Count/Count";

export default function CountContainer(min, max) {
    const [contador, setCount] = useState(0)

    const onAdd = (sign) =>{
        console.log(sign)
        if(sign === "+" && contador < 10) {
            setCount(contador+1)
        }
        else if (sign === "-" && contador > 0)
            setCount(contador-1)
    }

    return (
        <Count contador={contador} onAdd={onAdd}/>
    )
}
