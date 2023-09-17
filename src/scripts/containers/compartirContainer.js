import { Navbar } from "../components/Navbar.js";
import { Compartir } from "../components/Compartir.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";


export const CompartirRender = () => {
  let root = document.getElementById("root");
  root.innerHTML += Navbar();
  EfectoNavbar();
  
  
  var urlParams = new URLSearchParams(window.location.search);
  var characterId = urlParams.get('id');
  
 



  GetCharacterById(characterId, CharacterRender)

};
function CharacterRender (json) {
  let character = json[0]
  
  

  
  $("#compartir").html(
    Compartir(
      character.name,
      character.image,
      character.house,
      character.id,
      character.species,
      character.actor,
      character.dateOfBirth))
}