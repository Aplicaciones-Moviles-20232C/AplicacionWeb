export const Detail = (nombre,imagen,escuela,id,especie, color) =>{
    return `<article class="contenedor-detail">
            <div class="detail ${color}">
                <img class="detail-img" src="${imagen}" />
                <div class="overlay ">
                    <div class="info ${color}">
                        <div class = "div-nombre">
                            <h1>Nombre: ${nombre}</h1>
                        </div>
                        <div class = "div-escuela ">
                            <h1>Casa:${escuela}</h1
                        </div>
                        <div class = "div-especie">
                            <h1>Especie:${especie}</h1>
                          
                    </div>

                </div>
                </div>
                <img src="/src/img/83976.png" alt="favoritos" class="img-favoritos">
                <img src="/src/img/compartir.png" alt="compartir" class="img-compartir">
                </div>
                
                
                
            </article>`
}