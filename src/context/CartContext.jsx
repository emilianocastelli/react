import React, {useState} from "react";

export const Cart = React.createContext({});

export default function CartContext({defaultValue = [], children}){

    const [cart, setCart] = useState(defaultValue);

    function addToCart(item){
        setCart([...cart, item])
    }

    function cartSize(){
        let suma = 0;
        cart.forEach(prod=>{
            suma += prod.cantidad;
        })
        return suma;
    }

    return <Cart.Provider value={{cart: cart, cartSize: cartSize(), addToCart: addToCart}}>
        {children}
    </Cart.Provider>
};