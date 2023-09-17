import { Navbar } from "../components/Navbar.js"
import { Card } from "../components/Card.js"
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
export function HistorialRender(){
    $("#root").html(Navbar(false))
    EfectoNavbar()
    RenderizarHistorial()
}


const RenderizarHistorial = ()=>{
    var personajes = JSON.parse(localStorage.getItem("Historial"))
    let i = 0
    personajes.forEach(personaje => {
        if (i === 6) return; // Salir del bucle cuando i alcanza 5
        $("#contenedor-cartas").append(Card(personaje.name, personaje.image, personaje.house, personaje.id));
        i = i + 1;
    });
}