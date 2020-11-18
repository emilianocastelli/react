import React, {useState} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProduct = new Promise((res, rej) => {
        const product = {
            id: "1",
            name: "Tito Bessone",
            categoria: "TC",
            marca: "Dodge"
        };

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
            <div>
                <button type="button" className={"btn btn-primary btn-sm comprar"}>Comprar</button>
            </div>
        </div>
    );
}


export default ItemDetailContainer;