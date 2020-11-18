import React, {useEffect, useState} from "react";
import Item from "./Item";

const ItemList = () => {
    useEffect(() =>{
        const getPokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

        getPokemon.then((response) => {
            const data = response.json();
            return data;
        }).then((data) =>{
            let pokemon = data.results;
        })

    }, [])

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((res, rej) => {
        const products = [
            {
                id: "1",
                name: "Tito Bessone",
                categoria: "TC",
                marca: "Dodge"
            },
            {
                id: "2",
                name: "Guillermo Ortelli",
                categoria: "TC",
                marca: "Chevrolet"
            },
            {
                id: "3",
                name: "Juan María Traverso",
                categoria: "TC",
                marca: "Torino"
            },
            {
                id: "4",
                name: "Marcos Di Palma",
                categoria: "TC",
                marca: "Chevrolet"
            },
            {
                id: "5",
                name: "Walter Hernandez",
                categoria: "TC 2000",
                marca: "Ford"
            }
        ];

        setTimeout(() => {
            res(products)
        }, 2000);
    });

    getProducts.then((response) => {
        setProducts(response);
    }).catch((err => {
        console.log(err);
    }));

    return (
        <div className={"listProducts text-center mt-5"}>
            {
                products.map((product) => (
                    <Item name={product.name} marca={product.marca} id={product.id} />
                ))
            }
        </div>
    );
}


export default ItemList;