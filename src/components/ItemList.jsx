import React, {useEffect, useState} from "react";
import Item from "./Item";
import {getFirestore} from "../firebase";

const ItemList = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        setLoading(true);
        const db = getFirestore();
        const itemColeccion = db.collection("maquetas");
        itemColeccion.get()
            .then((querySnapshot) =>{

                if(querySnapshot.size !== 0){
                    setItems(querySnapshot.docs.map(doc => {
                        return {id: doc.id, ...doc.data()}
                    }))
                }
                setLoading(false);
            })

    }, []);

    if(loading) return <div>Loading</div>;

    console.log(items);


    return (
        <div className={"card-deck container text-center mt-5"}>
            <div className="row">
                {
                    items.map((product) => (
                        <div className={"col-6 col-md-4 p-3"}>
                          <Item name={product.name} marca={product.brand} image={product.image} description={product.description}  price={product.price} id={product.id} />
                        </div>
                    ))
                }
                </div>

        </div>
    );
}


export default ItemList;