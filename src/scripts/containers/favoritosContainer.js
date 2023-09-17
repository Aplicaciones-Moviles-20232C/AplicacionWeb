import { Navbar } from "../components/Navbar.js"
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
import { Card } from "../components/Card.js";
export function FavoritosRender(){
    $("#root").html(Navbar(false))
    EfectoNavbar()
    RenderizarFavoritos()
}


function RenderizarFavoritos() {
    let personajes = JSON.parse(localStorage.getItem("Favoritos"))
    personajes.forEach(personaje => {
        $("#contenedor-cartas").append(Card(personaje.name,personaje.image,personaje.house,personaje.id))
    });
}