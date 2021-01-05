import React, {useContext, useState} from "react";
import { Cart } from "../../context/CartContext";
import Item from "../Item";
import { Link } from "react-router-dom";
import {getFirestore} from "../../firebase";
import * as firebase from "firebase";

const CartContainers = () => {
    const [orderId, setOrderId] = useState("");

    const carrito = useContext(Cart);


    let  sumaTotal = 0;

    carrito.cart.forEach((item)=>{
        if(item.price) sumaTotal += parseInt(item.price);
    })

    const addOrder = () =>{

        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: {
                name: "emi",
                city: "tandil",
                email: "emi@gmail.com"
            },
            items: carrito.cart.map((item)=>{
                return {
                    id: item.id,
                    price: item.price,
                    name: item.name
                }
            }),
            total: sumaTotal,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        };

        console.log(newOrder);
        orders.add(newOrder).then(({id}) => {
            setOrderId(id);
            carrito.vaciarCarrito();
        })
    }

    if (orderId){
        return (
            <div className={"container"}>
                <h1>Su orden de compra es: {orderId}</h1>
            </div>
        )
    }
    if (carrito.cartSize === 0){
        return(
            <div className={"container text-center"}>
                <h1 className={"mt-3 mb-3"}>No hay nada seleccionado</h1>
                <Link to={"/"}>
                    <h3>Volver al listado de productos</h3>
                </Link>

            </div>
        )
    }else{
        return(
            <div className={"container text-center"}>
                <h1 className={"mt-5"}>Carrito ({carrito.cartSize})</h1>
                <h2>Total ${sumaTotal}</h2>
                {carrito.cart.map((prod)=>
                        <div className={"col-12 text-center"}>
                            <h3>Cantidad: {prod.cantidad}</h3>
                            <Item name={prod.name} marca={prod.marca} image={prod.image} price={prod.price} id={prod.id} />
                            <hr/>
                        </div>
                )}
                <button onClick={addOrder}>Enviar Orden</button>
            </div>
        );
    }


}

export default CartContainers;