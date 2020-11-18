import React  from "react";

const Home = (props) =>{
    return(
       <div className={"container text-center"}>
           <h1 className={"mt-5"}>{props.greeting}</h1>
       </div>
    );
}


export default Home;

