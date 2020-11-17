import React  from "react";
import CountContainer from "../components/Containers/CountContainer";


const Home = (props) =>{
    return(
       <div className={"container text-center"}>
           <h1 className={"mt-5"}>{props.greeting}</h1>
           <CountContainer min="0" max={"10"}/>
       </div>
    );
}


export default Home;

