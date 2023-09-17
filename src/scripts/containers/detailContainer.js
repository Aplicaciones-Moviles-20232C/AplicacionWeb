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
  
  function AgregarAlHistorial(personaje) {
    var historial = JSON.parse(localStorage.getItem("Historial") || "[]");
    var id = searchJsonId(historial, personaje.id)
    if (id !== -1) {
        historial.splice(id, 1);
    }
    historial.unshift(personaje);
    localStorage.setItem("Historial", JSON.stringify(historial));
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
}

export const searchJsonId = (json, id) =>
{
    var indiceEncontrado = json.findIndex(function(item) {
        return item.id === id;
    });
    console.log(indiceEncontrado);
    return indiceEncontrado;
}
