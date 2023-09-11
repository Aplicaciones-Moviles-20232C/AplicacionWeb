import { Navbar } from "../components/Navbar.js";
import { Detail } from "../components/Detail.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";

export const DetailRender = () => {
  let root = document.getElementById("root");
  root.innerHTML += Navbar();
  EfectoNavbar();
  let detalle = document.getElementById("details");
  var urlParams = new URLSearchParams(window.location.search);
  var characterId = urlParams.get('id');
  GetCharacterById(characterId, function(characterData) {
    
    const nombre = characterData.name; 
    const edad = characterData.age;   
  
    detalle.innerHTML += Detail(nombre, edad);
  });
};


