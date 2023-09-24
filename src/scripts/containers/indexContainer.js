import { FilterCharacter, GetSpells } from "../services/apiCall.js";
import { Filtro } from "../components/Filtros.js";
import { debounce } from "../effects/debounce.js";
import { RenderizarFooter } from "../render/footer.js";
import { RenderizarResultado, RenderizarConjuros, ActualizacionPorCasas, RenderizarPaginacion, RenderizarCasa } from "../render/index.js";
import { RenderizarNavbar } from "../render/navbar.js";

export const IndexRender = () => {
  RenderizarNavbar(true)
  RenderizarFooter();
  ActualizacionPorCasas();
  RenderizarPaginacion();
  localStorage.setItem("personajes", "[]");
  $("#filtros").append(Filtro());
  //Agrego filtros
  DebounceBarraDeBusqueda()
  FiltroAscDesc()
  //Por defecto renderizo Gryffindor
  RenderizarCasa("Gryffindor");
  GetSpells(RenderizarConjuros);
};

//------------------------------------Functiones de filtrado en el index------------------------------------
//AGREGO LA FUNCIONALIDAD DE LA BARRA DE BUSQUEDA
function DebounceBarraDeBusqueda() {
  $(document).ready(function () {
    function buscarPersonaje() {
      const inputValor = $(".search-input").val();
      // Aca va el codigo cuando se hace el debounce
      FilterCharacter(inputValor, RenderizarResultado);
    }
    const buscarPersonajeDebounce = debounce(buscarPersonaje, 600);
    $(".search-input").on("input", buscarPersonajeDebounce);
  });
}

//AGREGO LA FUNCIONALIDAD DE ORDEN POR NOMBRE
function FiltroAscDesc(){
  localStorage.setItem("orden", "asc"); //por defecto lo seteo en asc
  $("#orderButton").click(function () {
    if ($(this).hasClass("asc")) {
      $(this).removeClass("asc").addClass("desc");
      $(this).html("<h3>Sort: Descending</h3>");
      localStorage.setItem("orden", "desc");
    } else {
      $(this).removeClass("desc").addClass("asc");
      $(this).html("<h3>Sort: Ascending</h3>");
      localStorage.setItem("orden", "asc");
    }
    RenderizarResultado();
  });
}