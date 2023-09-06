
const baseUrl = "https://hp-api.onrender.com/api/"

export const GetCharacters =()=>{
    $.get( `${baseUrl}characters`, function( data ) {
        console.log( typeof data ); // string
        console.log( data ); // HTML content of the jQuery.ajax page
      });
}

export const GetCharacterById = (id) =>{
    $.get( `${baseUrl}character/${id}`, function( data ) {
        console.log( typeof data );
        console.log( data );
      });
}