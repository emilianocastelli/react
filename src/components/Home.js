import React  from "react";
import ItemList from "../../src/components/ItemList";
const Home = (props) =>{
    return(
       <div className={"container text-center"}>
           <h1 className={"mt-5"}>{props.greeting}</h1>
           <ItemList/>
       </div>
    );
}


export default Home;

