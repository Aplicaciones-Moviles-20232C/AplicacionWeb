export const Detail = (nombre,imagen,casa,id,especie,actor,isAlive,patronus,wandWood,anio,color,checked) =>{
    return `<div class="detail">
        <div class="info-image">
          <img class="detail-img" src="${imagen}" />
        </div>
        <div class="info-character">
            <div class="info">
                <div class = "div-nombre">
                    <h1>${nombre}</h1>
                </div>
                
                <div class = "div-escuela">
                    <h2>Hogwarts house: ${casa}</h2>
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
        <div id="map" style="width: 100%; height: 400px;"></div>`
}