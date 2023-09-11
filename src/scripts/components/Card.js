export const Card = (nombre,imagen,escuela,id) =>{
    return `<article class="card">
                <div class="div-img">
                    <img class="card-img" src="${imagen}" alt="${nombre}" />
                </div>
                <div class="overlay">
                    <div class = "div-nombre">
                        <h1>${nombre}</h1>
                    </div>
                </div>
            </article>`
}