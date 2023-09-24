import { Card } from "../components/Card.js";
import { NotFound } from "../components/NotFound.js";
import { Spell } from "../components/Spell.js";
import { Paginacion } from "../components/Paginacion.js";
import { GetCharactersByHouse } from "../services/apiCall.js";
import { ActualizarNavbar } from "../effects/Navbar.js";


//Esta funcion se encarga de renderizar el mensaje cuando no se encuentra lo que esta buscando
  export const RenderError = (data)=>{
    let hayBusqueda = data.length > 0;
    if (!hayBusqueda) {
      $("#error-div").prepend(NotFound());
    } else {
      $("#not-found").remove();
    }
  }
//Esta funcion renderiza los conjuros
export const RenderizarConjuros = (conjuros)=>{
    conjuros = MezclarArray(conjuros)
    for (let i = 0; i < 10; i++) {
      $("#conjuros").append(Spell(conjuros[i].name,conjuros[i].description))
    }
}

//Esta function actualiza las cartas dependiendo la casa que se seleccione
export function ActualizacionPorCasas() {
  var elementosLista = document.querySelectorAll(".actualizar-casa");
  elementosLista.forEach(function (elemento) {
    var nombreCasa = elemento.innerHTML;
    elemento.addEventListener("click", function () {
      RenderizarCasa(nombreCasa);
      ActualizarNavbar(nombreCasa);
    });
  });
}

//Funcion que hace el callback para renderizar la casa
export function RenderizarCasa(casa) {
  GetCharactersByHouse(casa, CasasRender);
}

//Funcion principal del renderizado. Esta funcion se encarga de la renderizacion de las cartas en el index
export const RenderizarResultado = () => {
  let paginaActual = localStorage.getItem("pagina");
  let itemsPorPagina = 6;
  const startIndex = (paginaActual - 1) * itemsPorPagina;
  const endIndex = startIndex + itemsPorPagina;

  let busqueda = JSON.parse(localStorage.getItem("busqueda"));
  let personajes = JSON.parse(localStorage.getItem("personajes"));
  let orden = localStorage.getItem("orden");
  let jsonARenderizar;
  busqueda.length == 0
    ? (jsonARenderizar = personajes)
    : (jsonARenderizar = busqueda);

  $("#contenedor-cartas").html("");
  ordenarPersonajes(jsonARenderizar, orden);
  ActualizarBotonesPaginacion(
    Number(paginaActual),
    itemsPorPagina,
    jsonARenderizar
  );
  jsonARenderizar = jsonARenderizar.slice(startIndex, endIndex);

  jsonARenderizar.forEach((personaje) => {
    $("#contenedor-cartas").append(
      Card(personaje.name, personaje.image, personaje.house, personaje.id)
    );
  });
};

//Funcion que procesa en el localStorage para luego renderizar
export function CasasRender(json) {
  $("#contenedor-cartas").html("");
  localStorage.setItem("busqueda", "[]");
  localStorage.setItem("pagina", 1);
  localStorage.setItem(
    "personajes",
    JSON.stringify(json.filter((personaje) => personaje.image))
  );
  RenderizarResultado();
}

//Esta funcion actualiza en el localstorage con la pagina en la que se encuentra
export function ActualizarPagina(isNext) {
  let pagina = Number(localStorage.getItem("pagina"));
  isNext ? (pagina = pagina + 1) : (pagina = pagina - 1);
  localStorage.setItem("pagina", pagina);
  console.log("pagina " + pagina);
  $("html,body").scrollTop(0);
  RenderizarResultado();
}
//Esta funcion renderiza la paginacion
export function RenderizarPaginacion() {
  $("#paginacion").append(Paginacion());
  $("#prev-pag").click(function (e) {
    ActualizarPagina(false);
  });
  $("#next-pag").click(function (e) {
    ActualizarPagina(true);
  });
}


//------------------------------------------------Funciones auxiliares------------------------------------------------
//Esta funcion mezcla un array aleatoriamente
function MezclarArray(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
//Esta funcion actualiza los botones de la paginación
function ActualizarBotonesPaginacion(paginaActual, itemsPorPagina, personajes) {
  //Deshabilito el boton de pagina anterior en el caso de que la pagina sea la primera
  const previousButton = document.getElementById("prev-pag");
  previousButton.disabled = paginaActual === 1;

  //Deshabilito el boton de pagina siguiente en el caso de que la pagina sea la ultima
  const maxPage = Math.ceil(personajes.length / itemsPorPagina);
  const nextButton = document.getElementById("next-pag");
  nextButton.disabled = paginaActual === maxPage;
}

//Esta funcion ordena los personajes ascendente o descendentemente,
//depende como esté en el localstorage
function ordenarPersonajes(personajes, orden) {
  personajes.sort(function (a, b) {
    const nombreA = a.name.toUpperCase();
    const nombreB = b.name.toUpperCase();
    if (orden === "asc") {
      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0;
    } else if (orden === "desc") {
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