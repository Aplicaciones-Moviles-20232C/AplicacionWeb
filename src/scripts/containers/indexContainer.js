import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById, GetCharacterByFilter } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
import { Filtro } from "../components/Filtros.js";

function DefaultRender(json){ 
  const personajesConImagen = json.filter((personaje) => personaje.image);
  personajesConImagen.forEach((personaje) => {
    if (personaje.image != ""){
    $("#contenedor-cartas").append(Card(
        personaje.name,
        personaje.image,
        personaje.house,
        personaje.id
      )) };
  });
  localStorage.setItem("busqueda",JSON.stringify(personajesConImagen))
}

export const IndexRender = () => {
  $("#root").html(Navbar())
  EfectoNavbar();
  localStorage.setItem("busqueda","[]")

  $("#filtros").append(Filtro());

  
  //AGREGO LA FUNCIONALIDAD DE LA BARRA DE BUSQUEDA
  $(document).ready(function() {
    function buscarPersonaje() {
      const inputValor = $(".search-input").val();
      // Aca va el codigo cuando se hace el debounce
      GetCharacterByFilter(inputValor, RenderResult);
      
    }
    const buscarPersonajeDebounce = debounce(buscarPersonaje, 600);
    $(".search-input").on("input", buscarPersonajeDebounce);
  });

  //AGREGO LA FUNCIONALIDAD DEL FILTRO DE NOMBRE
  $("#orderButton").click(function() {
    if ($(this).hasClass("asc")) {
      $(this).removeClass("asc").addClass("desc");
      $(this).html("<h3>Ordenar por nombre: Descendente</h3>")
      console.log("ESTOY EJECUTANDO EL CAMBIO A DESC")
    } else {
      $(this).removeClass("desc").addClass("asc");
      $(this).html("<h3>Ordenar por nombre: Ascendente</h3>")
      console.log("ESTOY EJECUTANDO EL CAMBIO A ASC")
    }
    RenderResult()
  });
  //AGREGO LA FUNCIONALIDAD DE FILTRO DE CASA
  $('#select-house').change(function() {
    let houseSelected = $('#select-house').val();
    console.log(houseSelected)
    RenderResult()
  });
  GetCharacters(DefaultRender)
  
};

const RenderResult = () =>{
  //Traigo la casa seleccionada
  let houseSelected = $('#select-house').val();
  houseSelected == null ? houseSelected = "NA" : houseSelected = houseSelected.toUpperCase();
  let json = JSON.parse(localStorage.getItem("busqueda"));
  let personajesFiltradosPorCasa;
  houseSelected === "NA" ? personajesFiltradosPorCasa = json : personajesFiltradosPorCasa = json.filter(personaje => personaje.house.toUpperCase() === houseSelected);
  $("#contenedor-cartas").html("")
  var ascOrDesc = $('#orderButton').attr('class');
  ordenarPersonajes(personajesFiltradosPorCasa,ascOrDesc)
  personajesFiltradosPorCasa.forEach((personaje) => {
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
    }
  });
}


