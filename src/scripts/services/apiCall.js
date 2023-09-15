import { hpCharacters } from "../containers/jsonHP.js";

const baseUrl = "https://hp-api.onrender.com/api/characters/"

export const GetCharacters = (callback)=>{
    $.get( `${baseUrl}`, function( data ) {
        callback( data );
      }).fail(function (jqXHR, textStatus, errorThrown) {
        // En caso de error, retorno la lista almacenada localmente
        callback( hpCharacters );
      });
}

export const GetCharactersByHouse = (house, callback) =>{
  $.get( `${baseUrl}house/${house}`, function( data ) {
      callback( data ); 
    }).fail(function (jqXHR, textStatus, errorThrown) {
      // En caso de error, retorno la lista almacenada localmente
      callback( hpCharacters ); 
    });
}


export const GetCharacterById = (id, callback) =>{
    $.get( `${baseUrl}${id}`, function( data ) {
        callback( data ); 
      }).fail(function (jqXHR, textStatus, errorThrown) {
        // En caso de error, retorno la lista almacenada localmente
        callback( hpCharacters ); 
      });
}


export const GetCharacterByFilter = (searchTerm, callback) =>{
  $.get( `${baseUrl}`, function( data ) {
    //Si el termino que recibo esta vacio, entonces le retorno todos los personajes. Sino hago el filtrado
    searchTerm=="" ? localStorage.setItem("busqueda", JSON.stringify(data)) : localStorage.setItem("busqueda", buscarPersonajesSimilares(searchTerm, data));
    callback()
  }).fail(function (jqXHR, textStatus, errorThrown) {
    // En caso de error, retorno la lista almacenada localmente
    searchTerm=="" ? localStorage.setItem("busqueda", JSON.stringify(hpCharacters)) : localStorage.setItem("busqueda", buscarPersonajesSimilares(searchTerm, hpCharacters)); 
    callback()
  });
}


//Funcion para filtrar personajes localmente, la api no lo hace
function buscarPersonajesSimilares(nombre, personajes) {
  const resultados = personajes.filter((personaje) => {
    return personaje.name.toLowerCase().includes(nombre.toLowerCase());
  });
  return JSON.stringify(resultados);
}
