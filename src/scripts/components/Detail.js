export const Detail = (nombre,imagen,casa,id,especie,actor,isAlive,patronus,wandWood,anio,color,checked) =>{
    return `
    <div class="detail ${color}">
        <div class="info-image">
          <img class="detail-img" src="${imagen}" />
        </div>
        <div class="info-character">
            <div class="info ${color}">
                <div class = "div-nombre">
                    <h1>${nombre}</h1>
                </div>
                
                <div class = "div-escuela">
                    <h3>Hogwarts house: ${casa}</h3>
                </div>
                <div class = "div-especie">
                    <h3>Specie: ${especie}</h3>
                </div>
                <div class = "div-anio">
                    <h3>Birthdate: ${anio}</h3>
                </div>
                <div class = "div-isAlive">
                    <h3>Alive: ${isAlive}</h3>
                </div>
                <div class = "div-patronus">
                    <h3>Patronus: ${patronus}</h3>
                </div>
                <div class = "div-actor">
                  <h3>Actor: ${actor}</h3>
                </div>
                <div class = "div-wand">
                  <h3>Wand wood: ${actor}</h3>
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
        </div>`
}