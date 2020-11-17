import React, {useState} from "react";

const Productos = (props) => {

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
            <ul className={"list-group list-group-flush"}>
                {
                    products.map((product) => (
                        <li className={"list-group-item"} key={product.id}>
                            {product.name} -
                            {product.marca} -
                            {product.categoria}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}


export default Productos;