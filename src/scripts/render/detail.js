import { Detail } from "../components/Detail.js";

//Esta funcion renderiza el personaje en la pagina detalle
export function RenderizarDetalle(character) {
  AgregarAlHistorial(character);
  let existe = ExisteFavorito(character);
  let checked = existe ? "checked" : "";
  const randomLat = Math.random() * (90 - -90) + -90;
  const randomLng = Math.random() * (180 - -180) + -180;
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
      checked
    )
  );

  //Selecciono los elementos que tengan la case fav
  //y les agrego el evento del guardado en localstorage con jQuery
  $(".heart").each(function () {
    var fav = this;
    fav.addEventListener("click", (event) => {
      UpdateFavoritos(character);
    });
  });

  //Agrego el mapa
  const map = L.map("map").setView([randomLat, randomLng], 4); // Configura las coordenadas iniciales y el nivel de zoom
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
  }).addTo(map);
  const marker = L.marker([randomLat, randomLng]).addTo(map); //Marcador del mapa
  marker.bindPopup("Ubicación actual").openPopup();
}

//Esta funcion agrega el personaje al historial
export function AgregarAlHistorial(personaje) {
  var historial = JSON.parse(localStorage.getItem("Historial") || "[]");
  var id = searchJsonId(historial, personaje.id);
  if (id !== -1) {
    historial.splice(id, 1);
  }
  historial.unshift(personaje);
  localStorage.setItem("Historial", JSON.stringify(historial));
}

//Esta funcion retorna el indice del personaje si existe o -1 si no lo encuentra
export const searchJsonId = (json, id) => {
  var indiceEncontrado = json.findIndex(function (item) {
    return item.id === id;
  });
  console.log(indiceEncontrado);
  return indiceEncontrado;
};

//Esta funcion retorna un booleano que representa la existencia de un personaje en los favoritos
export function ExisteFavorito(personaje) {
  var favoritos = JSON.parse(localStorage.getItem("Favoritos") || "[]");
  const index = favoritos.findIndex((p) => p.id === personaje.id);
  return index > -1;
}

//Esta funcion agrega o elimina un personaje al hacerle click al corazón
export function UpdateFavoritos(personaje) {
  var listaPersonajes = JSON.parse(localStorage.getItem("Favoritos") || "[]");
  // Buscar el índice del personaje en la lista por su ID
  const index = listaPersonajes.findIndex((p) => p.id === personaje.id);

  if (index !== -1) {
    // Si el personaje ya existe, eliminarlo de la lista
    listaPersonajes.splice(index, 1);
    localStorage.setItem("Favoritos", JSON.stringify(listaPersonajes));
    return "Personaje eliminado.";
  } else {
    // Si el personaje no existe en la lista, agregarlo
    listaPersonajes.push(personaje);
    localStorage.setItem("Favoritos", JSON.stringify(listaPersonajes));
    return "Personaje agregado.";
  }
}
