import React, {useEffect, useState} from "react";
import Item from "./Item";
import {data} from "../data";

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = new Promise((res, rej) => {


        setTimeout(() => {
            res(data)
        }, 2000);
    });

    getProducts.then((response) => {
        setProducts(response);
    }).catch((err => {
        console.log(err);
    }));

    return (
        <div className={"card-deck container text-center mt-5"}>
            <div className="row">
                {
                    products.map((product) => (
                        <Item name={product.name} marca={product.marca} image={product.image} id={product.id} />
                    ))
                }
            </div>

        </div>
    );
}


export default ItemList;