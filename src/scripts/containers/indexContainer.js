import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";
import { GetCharacters, GetCharacterByFilter, GetCharactersByHouse } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
import { Filtro } from "../components/Filtros.js";
import { Paginacion } from "../components/Paginacion.js";

function DefaultRender(json){ 
  const personajesConImagen = json.filter((personaje) => personaje.image);
  localStorage.setItem("pagina",0);
  for (let i = 0; i < 10; i++) {
    $("#contenedor-cartas").append(Card(
      personajesConImagen[i].name,
      personajesConImagen[i].image,
      personajesConImagen[i].house,
      personajesConImagen[i].id
  ))};
  localStorage.setItem("busqueda",JSON.stringify(personajesConImagen))
}

function RenderizarCasa(casa){
  console.log(casa)
  GetCharactersByHouse(casa,CasasRender)
}

function CasasRender(json){
  $("#contenedor-cartas").html("")
  localStorage.setItem("busqueda",JSON.stringify(json.filter((personaje) => personaje.image)))
  RenderResult()
}

function ActualizacionPorCasas (){
  var elementosLista = document.querySelectorAll(".actualizar-casa");
  elementosLista.forEach(function(elemento) {
    var nombreCasa = elemento.innerHTML;
    elemento.addEventListener("click", function() {
      RenderizarCasa(nombreCasa);
    });
  });
}

function PaginacionRender (){
  $("#paginacion").append(Paginacion())
  
}

export const IndexRender = () => {
  $("#root").html(Navbar(true))
  EfectoNavbar();
  ActualizacionPorCasas()
  PaginacionRender()
  localStorage.setItem("busqueda","[]")

  $("#filtros").append(Filtro());

  
  //AGREGO LA FUNCIONALIDAD DE LA BARRA DE BUSQUEDA
  $(document).ready(function() {
    function buscarPersonaje() {
      const inputValor = $(".search-input").val();
      // Aca va el codigo cuando se hace el debounce
      GetCharacterByFilter(inputValor, RenderSearch);
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
    if (personaje.image != ""){
    $("#contenedor-cartas").append(Card(
        personaje.name,
        personaje.image,
        personaje.house,
        personaje.id
      )) ;}
  });
}

const RenderSearch = (json)=>{
  $("#contenedor-cartas").html("")
  json.forEach((personaje) => {
    if (personaje.image != ""){
    $("#contenedor-cartas").append(Card(
        personaje.name,
        personaje.image,
        personaje.house,
        personaje.id
      )) ;}
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

function deshabilitarPaginas(prev,next){

  
}