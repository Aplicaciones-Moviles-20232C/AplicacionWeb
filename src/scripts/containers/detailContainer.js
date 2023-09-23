import { Navbar } from "../components/Navbar.js";
import { Detail } from "../components/Detail.js";
import { GetCharacterById } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/Navbar.js";
import { AgregarFooter } from "./footerContainer.js";

export const DetailRender = () => {
  let root = document.getElementById("root");
  root.innerHTML += Navbar();
  EfectoNavbar();
  AgregarFooter()
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
  
  let existe = ExisteFavorito(character);
  let checked = existe ? "checked" : "";
  const randomLat = Math.random() * (90 - (-90)) + (-90);
  const randomLng = Math.random() * (180 - (-180)) + (-180);
  $("#details").html(
    Detail(
      character.name,
      character.image,
      character.house,
      character.id,
      character.species,
      character.actor,
      character.alive,
      character.patronus,
      character.wand.wood,
      character.dateOfBirth,
      colorSeleccionado,checked
      ))

      

      //Selecciono los elementos que tengan la case fav 
    //y les agrego el evento del guardado en localstorage con jQuery
    $('.heart').each(function () {
      var fav = this;
      fav.addEventListener('click', event => {
          UpdateFavoritos(character)
      });
  });
  const map = L.map('map').setView([randomLat, randomLng], 3); // Configura las coordenadas iniciales y el nivel de zoom
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(map);
    
      // Añade marcadores, polígonos, líneas, etc., según tus necesidades en el mapa
      const marker = L.marker([randomLat, randomLng]).addTo(map);
      marker.bindPopup('Ubicación actual').openPopup();
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
  const index = favoritos.findIndex(p => p.id === personaje.id);
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
