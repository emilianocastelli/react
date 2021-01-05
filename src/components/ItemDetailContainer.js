import React, {useState} from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore} from "../firebase";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const db = getFirestore();
    const itemColeetion = db.collection("maquetas");
    const item = itemColeetion.doc(id);

    item.get().then((doc) =>{
        if(!doc.exists){
            console.log("Items does not exist");
            return;
        }
        setProduct({id:doc.id, ...doc.data()});
    }).catch((error =>{
        console.log("Error searching Items", error);
    })).finally(()=>{
        setLoading(false);
    }, []);

    if(loading) return (<div>Cargando Producto...</div>);

    return (
        <div className={"text-center mt-5"}>
            <ItemDetail producto={product}/>
        </div>
    );
}


export default ItemDetailContainer;