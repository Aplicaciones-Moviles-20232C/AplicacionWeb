import { Card } from "../components/Card.js";
import { ActualizarNavbar } from "../effects/Navbar.js";

//Renderiza los favoritos que fueron cargados previamente en la pagina detalle
export function RenderizarFavoritos() {
    ActualizarNavbar("Favorites")
    RenderizarTitulo()
    let personajes = JSON.parse(localStorage.getItem("Favoritos"))
    personajes.reverse().forEach(personaje => {
        $("#contenedor-cartas").append(Card(personaje.name,personaje.image,personaje.house,personaje.id))
    });
}


function RenderizarTitulo (){
    $("#titulo").html("<h1>Favorites</h1>")
}