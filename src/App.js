import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './Style.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainers from "./components/Containers/CartContainers";
import CartContext from "./context/CartContext";
import {getFirestore} from "./firebase";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <CartContext defaultValue={[]}>
                    <header className="App-header">
                        <NavBar home={"Home"} items={"Productos"}/>
                    </header>
                    <Switch>
                        <Route path="/item/:id" component={ItemDetailContainer}/>
                        <Route path="/cart" component={CartContainers}/>
                        <Route path="/items" render={()=> <ItemList/>}/>
                        <Route exact path={"/"} render={() => <Home greeting={"Replicas de Autos Historicos"}/>}/>
                    </Switch>
                </CartContext>
            </BrowserRouter>
        </div>
    );
}

export default App;
