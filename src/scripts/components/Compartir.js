export const Compartir = (nombre,imagen,escuela,id,especie,actor,anio) =>{
    return `<article class="contenedor-compartir">
    <div class="compartir">
    <form id="formulario" method="post">
        
            <div class="info">
            <label for="label-nombre"><h2>Mail:</h2></label>
            <input type="text" id="nom-imp" name="miTexto" value="">
            
                <div class = "div-nombre">
                <label for="label-nombre"><h2>Nombre:</h2></label>
                    <input type="text" id="nom-imp" name="miTexto" value= ${nombre}>
                    
                </div>
                <div class = "div-actor">
                <label for="actor"><h2>Actor:</h2></label>
                <input type="text" id="actor-imp" name="miTexto" value= ${actor}>
              
              </div>
                <div class = "div-escuela">
                <label for="label-escuela"><h2>Casa:</h2></label>
                <input type="text" id="escuela-imp" name="miTexto" value=${escuela}>
                </div>
                <div class = "div-especie">
                <label for="label-especie"><h2>Especie:</h2></label>
                <input type="text" id="especie-imp" name="miTexto" value=${especie}>
                    <div class = "div-anio">
                    <label for="label-anio"><h2>Fecha de nacimiento:</h2></label>
                <input type="text" id="anio-imp" name="miTexto" value=${anio}>
                  </div>
                 
            </div>
            
           </div>
           <input type="submit" value="Enviar " onclick="validador()">
           <input type="submit" value="Cancelar">
           </form>
        </div>
         </div>
    </article>`
}