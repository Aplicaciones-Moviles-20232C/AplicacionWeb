import { Navbar } from "../components/Navbar.js"
import { EfectoNavbar, ActualizarNavbar } from "../effects/Navbar.js";
import { Card } from "../components/Card.js";
import { AgregarFooter } from "./footerContainer.js";

export function FavoritosRender(){
    $("#root").html(Navbar(false))
    EfectoNavbar()
    AgregarFooter()
    ActualizarNavbar("Favoritos")
    RenderizarFavoritos()
}

function RenderizarFavoritos() {
    let personajes = JSON.parse(localStorage.getItem("Favoritos"))
    personajes.forEach(personaje => {
        $("#contenedor-cartas").append(Card(personaje.name,personaje.image,personaje.house,personaje.id))
    });
}