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
  console.log(characterId + " PARAMETROS")



  GetCharacterById(characterId, CharacterRender)

};


function CharacterRender (json) {
  let character = json[0]
  
  let colorSeleccionado = ''

  switch (character.house) {
    case 'Gryffindor':
      colorSeleccionado = 'rojo'
      break;
    case 'Slytherin':
      colorSeleccionado = 'verde'
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
      colorSeleccionado))
}


