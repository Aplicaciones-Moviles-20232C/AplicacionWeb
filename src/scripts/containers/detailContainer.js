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

        // Configura el mapa aquí y agrega marcadores u otras capas si es necesario
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Capa de mapa base (puedes elegir otro proveedor de mapas)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Puedes agregar marcadores, líneas, polígonos, etc., según tus necesidades
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('¡Hola! Este es un marcador de ejemplo.');

    // Ajusta el tamaño del mapa para que se ajuste al contenedor
    map.invalidateSize();

    }


