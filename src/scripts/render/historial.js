import { Card } from "../components/Card.js";
import { ActualizarNavbar } from "../effects/Navbar.js";

//Renderiza el historial
export const RenderizarHistorial = ()=>{
    ActualizarNavbar("History")
    RenderizarTitulo()
    var personajes = JSON.parse(localStorage.getItem("Historial"))
    let i = 0
    personajes.forEach(personaje => {
        if (i === 6) return; // Salir del bucle cuando i alcanza 5
        $("#contenedor-cartas").append(Card(personaje.name, personaje.image, personaje.house, personaje.id));
        i = i + 1;
    });
}

function RenderizarTitulo (){
    $("#titulo").html("<h1>History</h1>")
}