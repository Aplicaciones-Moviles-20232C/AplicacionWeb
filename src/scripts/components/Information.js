export const Information = () =>{
    return `<article class="contenedor-information">
    <div class="inf">
   
            <div class="titulo">
            <h1> Mas Informacion </h1>
            </div>
            
            <div class="contenedor-Rowling">
            <p class="texto">
                La creadora de la famosa serie de libros de Harry Potter es J.K. Rowling, cuyo nombre real es Joanne Rowling. Nació el 31 de julio de 1965 en Yate, Gloucestershire, Inglaterra. Su historia es fascinante y llena de desafíos antes de convertirse en una de las autoras más exitosas del mundo.
    
                Rowling tenía una pasión por la escritura desde joven, y la idea de Harry Potter le llegó durante un viaje en tren en 1990, mientras se dirigía a Londres. Comenzó a trabajar en la historia y, en 1997, publicó su primer libro, "Harry Potter y la piedra filosofal" (conocido como "Harry Potter and the Sorcerer's Stone" en los Estados Unidos). Inicialmente, el libro fue rechazado por varias editoriales antes de ser aceptado por Bloomsbury en el Reino Unido.
    
                La serie de Harry Potter se convirtió en un fenómeno literario global, y cada uno de los siete libros fue un éxito de ventas y se tradujo a numerosos idiomas. La historia sigue las aventuras de un joven mago, Harry Potter, mientras asiste a la escuela de magia y hechicería de Hogwarts y lucha contra el mago oscuro Lord Voldemort.
    
                El éxito de los libros llevó a la creación de una exitosa serie de películas y a la expansión del universo de Harry Potter a través de parques temáticos, productos relacionados y otras obras relacionadas.
    
                J.K. Rowling es admirada por su creatividad y habilidad para crear un mundo mágico lleno de personajes inolvidables. También es conocida por su filantropía y su activismo en temas sociales. Sin embargo, también ha sido objeto de controversia en algunos momentos debido a sus opiniones y comentarios en las redes sociales.
            </p>
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
               <input type="text" id="email" name="email">
               <span class="error-message" id="email-error"></span>
           </div>
           <div class="form-group">
               <label for="nota">Nota:</label>
               <input type="text" id="nota" name="nota">
               <span class="error-message" id="nota-error"></span>
           </div>
           <button type="submit">Enviar</button>
       </form>
       </div>
       </div>
         
    </article>`
}