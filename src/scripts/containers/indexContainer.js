import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById, GetCharacterByFilter } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
import { Filtro } from "../components/Filtros.js";

export const IndexRender = () => {
  $("#root").html(Navbar())
  EfectoNavbar();

  $("#filtros").append(Filtro());

  $(document).ready(function() {
    function buscarPersonaje() {
      const inputValor = $(".search-input").val();
      // Aca va el codigo cuando se hace el debounce
      GetCharacterByFilter(inputValor, RenderResult);
    }
    const buscarPersonajeDebounce = debounce(buscarPersonaje, 400);
    $(".search-input").on("input", buscarPersonajeDebounce);
  });
  

  hpCharacters.forEach((personaje) => {
    if (personaje.image != "") {
      $("#contenedor-cartas").append(Card(
        personaje.name,
        personaje.image,
        personaje.house,
        personaje.id
      )) ;
    }
  });
};


const RenderResult = (json) =>{
  console.log(json)
}

function debounce(func, delay) {
  let timeoutId;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}


