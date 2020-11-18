import React, {useState} from 'react';
import './Style.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    let home = "Home";
    let noticias = "Noticias";
    let multimedia = "Multimedia";
    let nosotros = "Nosotros";
    let contacto = "Contacto";
    let greeting = "Replicas de Autos Historicos";
    const [titleHome, setTitleHome] = useState("Titulo en Home");
    let contador = 0;

    return (
    <div className="App">
        <header className="App-header">
            <NavBar home={home} noticias={noticias} multimedia={multimedia} nosotros={nosotros} contacto={contacto}/>
        </header>
        <Home greeting={greeting}/>
        Lista de Productos
        <ItemList/>
        Producto Individual
        <ItemDetailContainer />
    </div>
    );
}

export default App;
