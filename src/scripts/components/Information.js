export const Information = () =>{
    return `<article class="contenedor-information">
    <div class="inf">
   
            <div class="titulo">
            <h1> Mas Informacion </h1>
            </div>
            
            <div class="parrafo">
            La historia de Harry Potter sigue la vida de un joven mago llamado Harry mientras asiste a la escuela de magia Hogwarts,
            <br> lucha contra el malvado Lord Voldemort y descubre su destino como el "Niño que sobrevivió"
            </div>
            
           </div>
           <div class="subtitulo">
           <h2>Para mas informacion completa con tus datos para comunicarte con nosotros</h2>
           </div>
           <div class ="contenedor">
           
           <div class ="container">
           
           <form action="#" method="POST" id="formulario">
           <div class="form-group">
               <label for="nombre">Nombre:</label>
               <input type="text" id="nombre" name="nombre">
               <span class="error-message" id="nombre-error"></span>
           </div>
           <div class="form-group">
               <label for="apellido">Apellido:</label>
               <input type="text" id="apellido" name="apellido">
               <span class="error-message" id="apellido-error"></span>
           </div>
           <div class="form-group">
               <label for="email">Correo Electrónico:</label>
               <input type="email" id="email" name="email">
               <span class="error-message" id="email-error"></span>
           </div>
           <div class="form-group">
               <label for="nota">Nota:</label>
               <input type="text" id="nota" name="nota">
               <span class="error-message" id="nota-error"></span>
           </div>
           <button type="submit">Enviar</button>
       </form>
         
    </article>`
}