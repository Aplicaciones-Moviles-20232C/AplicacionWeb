export const Detail = (nombre,imagen,escuela,id,especie) =>{
    return `<article class="detail">
                <img class="detail-img" src="${imagen}" />
                <div class="overlay">
                    <div class = "div-nombre">
                        <h1>${nombre}</h1>
                    </div>
                    <div class = "div-escuela">
                    <h1>${escuela}</h1
                    </div>
                    <div class = "div-especie">
                    <h1>${especie}</h1
                    </div>
                </div>
            </article>`
}