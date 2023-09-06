export const Card = (nombre,imagen,escuela,id) =>{
    return `<article class="card">
                <img class="card-img" src="${imagen}" />
                <div class="overlay">
                    <div class = "div-nombre">
                        <h1>${nombre}</h1>
                    </div>
                </div>
            </article>`
}