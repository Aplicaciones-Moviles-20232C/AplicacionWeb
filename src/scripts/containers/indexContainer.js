import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";
import { hpCharacters } from "./jsonHP.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";

export const IndexRender = () => {
  let root = document.getElementById("root");
  root.innerHTML += Navbar();
  EfectoNavbar();
  let rootCartas = document.getElementById("contenedor-cartas");
  hpCharacters.forEach((personaje) => {
    if (personaje.image != "") {
      rootCartas.innerHTML += Card(
        personaje.name,
        personaje.image,
        personaje.house,
        personaje.id
      );
    }
  });
};
