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
          console.log(character)
          UpdateFavoritos(character)
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

function ExisteFavorito(personaje) {
  var favoritos = JSON.parse(localStorage.getItem("Favoritos") || "[]");
  const index = listaPersonajes.findIndex(p => p.id === personaje.id);
  return ((index > -1))
}


function UpdateFavoritos(personaje) {
  var listaPersonajes = JSON.parse(localStorage.getItem("Favoritos") || "[]");
  // Buscar el índice del personaje en la lista por su ID
  const index = listaPersonajes.findIndex(p => p.id === personaje.id);

  if (index !== -1) {
    // Si el personaje ya existe, eliminarlo de la lista
    listaPersonajes.splice(index, 1);
    localStorage.setItem("Favoritos",JSON.stringify(listaPersonajes))
    return "Personaje eliminado.";
  } else {
    // Si el personaje no existe en la lista, agregarlo
    listaPersonajes.push(personaje);
    localStorage.setItem("Favoritos",JSON.stringify(listaPersonajes))
    return "Personaje agregado.";
  }
}