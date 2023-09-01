import { ButtonCustom } from "../components/ButtonCustom.js";
import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";

import { hpCharacters } from "./jsonHP.js";

export const IndexRender = () => {
    let root = document.getElementById("root");
    root.innerHTML += ButtonCustom("Este es el boton");
    root.innerHTML += Navbar()
    let rootCartas = document.getElementById("contenedor-cartas")
    hpCharacters.forEach(personaje => {
        if(personaje.image!= ""){
            rootCartas.innerHTML += Card(personaje.name,personaje.image,personaje.house,personaje.id);
        }
    });

}

