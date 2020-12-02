import React, {useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {data} from "../data";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProduct = new Promise((res, rej) => {
        let product = {};


        data.forEach((p)=>{
            if(p.id === id){
               product = p;
            }
        });

        setTimeout(() => {
            res(product)
        }, 3000);
    });

    getProduct.then((response) => {
        setProduct(response);
        setLoading(false);
    }).catch((err => {
        console.log(err);
    }));


    if(loading) return (<div>Cargando Producto...</div>);

    return (
        <div className={"text-center mt-5"}>
            <ItemDetail producto={product}/>
        </div>
    );
}


export default ItemDetailContainer;