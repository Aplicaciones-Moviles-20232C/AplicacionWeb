import { Navbar } from "../components/Navbar.js";
import { Detail } from "../components/Detail.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";

export const DetailRender = () => {
  let root = document.getElementById("root");
  root.innerHTML += Navbar();
  EfectoNavbar();

  var urlParams = new URLSearchParams(window.location.search);
  var characterId = urlParams.get('id');

  GetCharacterById(characterId, CharacterRender)

  
};

function CharacterRender (character) {
  AgregarAlHistorial(character)
  let colorSeleccionado = ''

  switch (character.house) {
    case 'Gryffindor':
      colorSeleccionado = 'rojo'
      break;
    case 'Slytherin':
      colorSeleccionado = 'verde'
      break;
      case 'Hufflepuff':
      colorSeleccionado = 'amarillo'
      break;
    default:
      break;
  }
  
  $("#details").html(
    Detail(
      character.name,
      character.image,
      character.house,
      character.id,
      character.species,
      character.actor,
      character.dateOfBirth,
      colorSeleccionado))

      //Selecciono los elementos que tengan la case fav 
    //y les agrego el evento del guardado en localstorage con jQuery
    $('.heart').each(function () {
      var fav = this;
      fav.addEventListener('click', event => {
          var id = event.target.getAttribute("data-id");
          console.log(id)
          UpdateFavoritos(id)
      });
  });
}


function AgregarAlHistorial(personaje) {
  var historial = JSON.parse(localStorage.getItem("Historial") || "[]");
  var id = searchJsonId(historial, personaje.id)
  if (id !== -1) {
      historial.splice(id, 1);
  }
  historial.unshift(personaje);
  localStorage.setItem("Historial", JSON.stringify(historial));
}

export const searchJsonId = (json, id) =>
{
    var indiceEncontrado = json.findIndex(function(item) {
        return item.id === id;
    });
    console.log(indiceEncontrado);
    return indiceEncontrado;
}


function ExisteFavorito(id) {
  var favoritos = JSON.parse(localStorage.getItem("Favoritos") || "[]");
  const index = favoritos.indexOf(id);
  return ((index > -1))
}

function UpdateFavoritos(id) {
  //Traigo los elementos del localstorage y sino hay nada trabajo con un array vacio
  var favoritos = JSON.parse(localStorage.getItem("Favoritos") || "[]");
  const index = favoritos.indexOf(id);
  (index > -1) ? // IndexOf retorna -1 en el caso de no encontrar un elemento
      favoritos.splice(index, 1) : //Elimino el elemento de la lista en el caso de que esté
      favoritos.push(id); // Añado en el caso que no esté

  favoritos.sort()
  // Guardo la lista de favoritos
  localStorage.setItem("Favoritos", JSON.stringify(favoritos));
}