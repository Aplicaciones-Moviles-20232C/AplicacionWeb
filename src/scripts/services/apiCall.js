import { hpCharacters } from "./jsonHP.js";
import { RenderError } from "../render/index.js";
const baseUrl = "https://hp-api.onrender.com/api/characters/"

//Retorna todos los personajes de la api o sino retorna el json local
export const GetCharacters = (callback)=>{
    $.get( `${baseUrl}`, function( data ) {
        callback( data );
      }).fail(function (jqXHR, textStatus, errorThrown) {
        // En caso de error, retorno la lista almacenada localmente
        callback( hpCharacters );
      });
}
//Retorna los personajes de la casa seleccionada o sino retorna el json local
export const GetCharactersByHouse = (house, callback) =>{
  $.get( `${baseUrl}house/${house}`, function( data ) {
      callback( data ); 
    }).fail(function (jqXHR, textStatus, errorThrown) {
      // En caso de error, retorno la lista almacenada localmente
      callback( hpCharacters ); 
    });
}
//Retorna el personaje por el id que recibe o sino retorna el json local
export const GetCharacterById = (id, callback) =>{
    $.get( `https://hp-api.onrender.com/api/character/${id}`, function( data ) {
        callback( data[0] ); 
      }).fail(function (jqXHR, textStatus, errorThrown) {
        // En caso de error, retorno la lista almacenada localmente
        callback( hpCharacters ); 
      });
}
//Retorna todos los conjuros
export const GetSpells = (callback)=>{
  $.get( `https://hp-api.onrender.com/api/spells`, function( data ) {
    callback(data)
  }).fail(function (jqXHR, textStatus, errorThrown) {
    callback(data)
  });
}


//-----------------------------Filtrados locales-----------------------------
//Filtro los personajes localmente por lo que busca en el index
export const FilterCharacter = (searchTerm, callback) =>{
  let data = JSON.parse(localStorage.getItem("personajes"))
  searchTerm == "" ? data = data : data = buscarPersonajesSimilares(searchTerm, data);
  localStorage.setItem("busqueda", JSON.stringify(data))
  RenderError(data)
  callback(data)
}

//Funcion para filtrar personajes localmente, la api no lo hace
function buscarPersonajesSimilares(searchTerm, personajes) {
  const resultados = personajes.filter((personaje) => {
    return personaje.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return resultados;
}
