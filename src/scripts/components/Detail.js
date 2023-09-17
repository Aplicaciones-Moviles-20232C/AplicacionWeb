export const Detail = (nombre,imagen,escuela,id,especie,actor,anio,color) =>{
    return `<article class="contenedor-detail">
    <div class="detail ${color}">
        <img class="detail-img" src="${imagen}" />
        <div class="overlay ">
            <div class="info ${color}">
                <div class = "div-nombre">
                    <h1>Nombre: ${nombre}</h1>
                </div>
                <div class = "div-actor">
                <h1>Actor:${actor}</h1>
              </div>
                <div class = "div-escuela ">
                    <h1>Casa:${escuela}</h1
                </div>
                <div class = "div-especie">
                    <h1>Especie:${especie}</h1>
                    <div class = "div-anio">
                    <h1>Fecha de nacimiento:${anio}</h1>
                  </div>
                  <div class"botones">
                    <div>
                      <input id="${id}-fav" class="heart" data-id = ${id} type="checkbox" checked/>
                      <label for="${id}-fav">❤</label>
                    </div>
                  

                  <button class="boton-compartir" onclick=""><img src="/src/img/compartir.svg"></button>
                  
                  </div> 
            </div>
           </div>
        </div>
         </div>
    </article>`
}