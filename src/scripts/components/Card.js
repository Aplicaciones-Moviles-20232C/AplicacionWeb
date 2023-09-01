export const Card = (nombre,imagen,escuela,id) =>{
    return `<div class="carta">
                <div class="imagen-carta">
                    <img src="${imagen}" class="avatar"/>
                 </div>
                <div class="nombre-carta">
                    <h2>${nombre}</h2>
                </div>
                <div class="escuela-carta">
                    <h3>${escuela}</h3>
                </div>
            </div>`
}