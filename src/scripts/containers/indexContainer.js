import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById, GetCharacterByFilter } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
import { Filtro } from "../components/Filtros.js";

function DefaultRender(json){ 
  json.forEach((personaje) => {
    if (personaje.image != ""){
    $("#contenedor-cartas").append(Card(
        personaje.name,
        personaje.image,
        personaje.house,
        personaje.id
      )) };
  });
}

export const IndexRender = () => {
  $("#root").html(Navbar())
  EfectoNavbar();

  $("#filtros").append(Filtro());

  
  GetCharacters(DefaultRender)
  //AGREGO LA FUNCIONALIDAD DE LA BARRA DE BUSQUEDA
  $(document).ready(function() {
    function buscarPersonaje() {
      const inputValor = $(".search-input").val();
      // Aca va el codigo cuando se hace el debounce
      GetCharacterByFilter(inputValor, RenderResult);
    }
    const buscarPersonajeDebounce = debounce(buscarPersonaje, 400);
    $(".search-input").on("input", buscarPersonajeDebounce);
  });

  //AGREGO LA FUNCIONALIDAD DEL FILTRO DE NOMBRE
  $("#orderButton").click(function() {
    if ($(this).hasClass("asc")) {
      $(this).removeClass("asc").addClass("desc");
      $(this).html("<h3>Ordenar por nombre: Descendente</h3>")
    } else {
      $(this).removeClass("desc").addClass("asc");
      $(this).html("<h3>Ordenar por nombre: Ascendente</h3>")

    }
    RenderResult()
  });
  
  RenderResult();

  
};


const RenderResult = () =>{
  var json = JSON.parse(localStorage.getItem("busqueda"))
  $("#contenedor-cartas").html("")
  var ascOrDesc = $('#orderButton').attr('class');
  ordenarPersonajes(json,ascOrDesc)
  json.forEach((personaje) => {
    if (personaje.image == ""){
      personaje.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
    }
    $("#contenedor-cartas").append(Card(
        personaje.name,
        personaje.image,
        personaje.house,
        personaje.id
      )) ;
  });
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


function ordenarPersonajes(personajes, orden) {
  personajes.sort(function (a, b) {
    const nombreA = a.name.toUpperCase();
    const nombreB = b.name.toUpperCase();

    if (orden === 'asc') {
      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0;
    } else if (orden === 'desc') {
      if (nombreA > nombreB) {
        return -1;
      }
      if (nombreA < nombreB) {
        return 1;
      }
      return 0;
    } else {
      throw new Error("El parámetro 'orden' debe ser 'asc' o 'desc'.");
    }
  });
}


