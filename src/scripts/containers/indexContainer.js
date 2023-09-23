import { Navbar } from "../components/Navbar.js";
import { Card } from "../components/Card.js";
import {
  FilterCharacter,
  GetCharactersByHouse,
  GetSpells,
} from "../services/apiCall.js";
import { EfectoNavbar, ActualizarNavbar } from "../effects/Navbar.js";
import { Filtro } from "../components/Filtros.js";
import { Paginacion } from "../components/Paginacion.js";
import { RenderSpells } from "../render/spellsRender.js";
import { debounce } from "../effects/debounce.js";

function ActualizacionPorCasas() {
  var elementosLista = document.querySelectorAll(".actualizar-casa");
  elementosLista.forEach(function (elemento) {
    var nombreCasa = elemento.innerHTML;
    elemento.addEventListener("click", function () {
      RenderizarCasa(nombreCasa);
      ActualizarNavbar(nombreCasa);
    });
  });
  
}

function RenderizarCasa(casa) {
  GetCharactersByHouse(casa, CasasRender);
}

function CasasRender(json) {
  $("#contenedor-cartas").html("");
  localStorage.setItem("busqueda", "[]");
  localStorage.setItem("pagina", 1);

  localStorage.setItem(
    "personajes",
    JSON.stringify(json.filter((personaje) => personaje.image))
  );
  RenderResult();
}

function ActualizarPagina(isNext) {
  let pagina = Number(localStorage.getItem("pagina"));
  isNext ? (pagina = pagina + 1) : (pagina = pagina - 1);
  localStorage.setItem("pagina", pagina);
  console.log("pagina " + pagina);
  $("html,body").scrollTop(0);
  RenderResult();
}

function PaginacionRender() {
  $("#paginacion").append(Paginacion());
  $("#prev-pag").click(function (e) {
    ActualizarPagina(false);
  });
  $("#next-pag").click(function (e) {
    ActualizarPagina(true);
  });
}

export const IndexRender = () => {
  $("#root").html(Navbar(true));
  EfectoNavbar();
  ActualizacionPorCasas();
  PaginacionRender();
  localStorage.setItem("personajes", "[]");

  $("#filtros").append(Filtro());

  //AGREGO LA FUNCIONALIDAD DE LA BARRA DE BUSQUEDA
  $(document).ready(function () {
    function buscarPersonaje() {
      const inputValor = $(".search-input").val();
      // Aca va el codigo cuando se hace el debounce
      FilterCharacter(inputValor, RenderResult);
    }
    const buscarPersonajeDebounce = debounce(buscarPersonaje, 600);
    $(".search-input").on("input", buscarPersonajeDebounce);
  });

  //AGREGO LA FUNCIONALIDAD DEL FILTRO DE NOMBRE
  localStorage.setItem("orden", "asc"); //por defecto lo seteo en asc
  $("#orderButton").click(function () {
    if ($(this).hasClass("asc")) {
      $(this).removeClass("asc").addClass("desc");
      $(this).html("<h3>Ordenar por nombre: Descendente</h3>");
      localStorage.setItem("orden", "desc");
    } else {
      $(this).removeClass("desc").addClass("asc");
      $(this).html("<h3>Ordenar por nombre: Ascendente</h3>");
      localStorage.setItem("orden", "asc");
    }
    RenderResult();
  });

  //Por defecto renderizo Gryffindor
  RenderizarCasa("Gryffindor");
  GetSpells(RenderSpells);
};

const RenderResult = () => {
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

function ActualizarBotonesPaginacion(paginaActual, itemsPorPagina, personajes) {
  //Deshabilito el boton de pagina anterior en el caso de que la pagina sea la primera
  const previousButton = document.getElementById("prev-pag");
  previousButton.disabled = paginaActual === 1;

  //Deshabilito el boton de pagina siguiente en el caso de que la pagina sea la ultima
  const maxPage = Math.ceil(personajes.length / itemsPorPagina);
  const nextButton = document.getElementById("next-pag");
  nextButton.disabled = paginaActual === maxPage;
}

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