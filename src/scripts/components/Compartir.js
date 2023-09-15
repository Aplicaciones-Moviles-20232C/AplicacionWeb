export const Compartir = (nombre,imagen,escuela,id,especie,actor,anio, color) =>{
    return `<article class="contenedor-compartir">
    <div class="compartir ${color}">
        <img class="compartir-img" src="${imagen}" />
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
            </div>
           </div>
        </div>
         </div>
    </article>`
}