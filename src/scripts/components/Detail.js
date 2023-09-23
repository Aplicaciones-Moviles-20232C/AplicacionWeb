export const Detail = (nombre,imagen,escuela,id,especie,actor,anio, color) =>{
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
                    <h2>Specie: ${especie}</h2>
                </div>
                <div class = "div-anio">
                    <h2>Birthdate: ${anio}</h2>
                </div>
                <div class = "div-isAlive">
                    <h2>Alive: ${isAlive}</h2>
                </div>
                <div class = "div-patronus">
                    <h2>Patronus: ${patronus}</h2>
                </div>
                <div class = "div-actor">
                  <h2>Actor: ${actor}</h2>
                </div>
                <div class = "div-wand">
                  <h2>Wand wood: ${actor}</h2>
                </div>
                <div id="map" style="width: 100%; height: 200px;"></div>
                
                  <div class = "botones">
                    <div>
                      <input id="${id}-fav" class="heart" type="checkbox" ${checked}/>
                      <label id="heart-icon" for="${id}-fav">❤</label>
                    </div>
                    <button class="boton-compartir" onclick=""><img src="/src/img/compartir.svg"></button>
                  </div> 
            </div>
           </div>
        </div>
         </div>
    </article>`
}