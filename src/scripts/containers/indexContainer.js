import { ButtonCustom } from "../components/ButtonCustom.js";
import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";

import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById } from "../services/apiCall.js";

export const IndexRender = () => {
    let root = document.getElementById("root");
    root.innerHTML += ButtonCustom("Este es el boton");
    root.innerHTML += Navbar()
    root.innerHTML += Card("Harry Potter", "https://ik.imagekit.io/hpapi/harry.jpg","texto",2 );

    hpCharacters.forEach(personaje => {
        if(personaje.image!= ""){
            root.innerHTML += Card(personaje.name,personaje.image,personaje.house,personaje.id);
        }
    });
}

