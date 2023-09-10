import { hpCharacters } from "../containers/jsonHP.js";

const baseUrl = "https://hp-api.onrender.com/api/"

export const GetCharacters =(callback)=>{
    $.get( `${baseUrl}characters`, function( data ) {
        console.log( typeof data ); 
        console.log( data );
        callback( data ); 
      }).fail(function (jqXHR, textStatus, errorThrown) {
        // En caso de error, retorno la lista almacenada localmente
        callback( hpCharacters ); 
      });
}


export const GetCharacterById = (id, callback) =>{
    $.get( `${baseUrl}character/${id}`, function( data ) {
        console.log( typeof data );
        console.log( data );
        callback( data ); 
      }).fail(function (jqXHR, textStatus, errorThrown) {
        // En caso de error, retorno la lista almacenada localmente
        callback( hpCharacters ); 
      });
}

export const GetCharacterByFilter = (searchTerm, callback) =>{
  $.get( `${baseUrl}characters`, function( data ) {
    console.log( typeof data ); 
    console.log( data );
    //Si el termino que recibo esta vacio, entonces le retorno todos los personajes. Sino hago el filtrado
    searchTerm=="" ? callback(data) : callback( buscarPersonajesSimilares(searchTerm, data) ); 
  }).fail(function (jqXHR, textStatus, errorThrown) {
    // En caso de error, retorno la lista almacenada localmente
    searchTerm=="" ? callback(hpCharacters) :callback( buscarPersonajesSimilares(searchTerm, hpCharacters) ); 
  });
}


//Funcion para filtrar personajes localmente, la api no lo hace
function buscarPersonajesSimilares(nombre, personajes) {
  const resultados = personajes.filter((personaje) => {
    return personaje.name.toLowerCase().includes(nombre.toLowerCase());
  });
  return resultados;
}
