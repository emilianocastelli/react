import React, {useEffect, useState} from "react";
import Count from "../Count/Count";

export default function CountContainer({min, max, onChange}) {
    const [contador, setCount] = useState(min)
    const onAdd = (sign) =>{
        if(sign === "+" && contador < max) {
            setCount(contador+1)
        }
        else if (sign === "-" && contador > min)
            setCount(contador-1)

    }
    onChange(contador);

    return (
        <Count contador={contador}  onAdd={onAdd}/>
    )
}
