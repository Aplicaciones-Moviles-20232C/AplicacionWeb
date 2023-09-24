export const Information = () =>{
    return `<article class="contenedor-information">
    <div class="inf">
   
            <div class="titulo">
            <h1> More information </h1>
            </div>
            
            <div class="contenedor-Rowling">
            <p class="texto">
            The creator of the famous Harry Potter book series is J.K. Rowling, whose real name is Joanne Rowling. He was born on July 31, 1965 in Yate,
            
            Gloucestershire, England. Her story is fascinating and full of challenges before becoming one of the most successful authors in the world.
            
            Rowling had a passion for writing from a young age, and the idea for Harry Potter came to her during a train journey in 1990, 
            
            while en route to London. He began working on the story and, in 1997, published his first book, "Harry Potter and the Sorcerer's Stone" 
            
            (known as "Harry Potter and the Sorcerer's Stone" in the United States). The book was initially rejected by several publishers before being accepted by Bloomsbury in the United Kingdom.
            
            The Harry Potter series became a global literary phenomenon, with each of the seven books being a bestseller and translated into numerous languages. 
            
            The story follows the adventures of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry and battles the dark wizard Lord Voldemort. 
            
            The success of the books led to the creation of a successful film series and the expansion of the Harry Potter universe through theme parks, 
            
            related products, and other related works. J.K. Rowling is admired for her creativity and ability to create a magical world full of unforgettable characters. 
            
            She is also known for her philanthropy and activism on social issues. However, he has also been the subject of controversy at times due to his opinions and comments on social media.</p>
             </div>
            
           </div>
           <div class="subtitulo">
           <h2>For more information complete with your data and contact us</h2>
           </div>
           <div class ="contenedor">
           
           <div class ="container">
           
           <form action="#" method="POST" id="formulario">
           <div class="form-group">
               <label for="nombre">Name:</label>
               <input type="text" id="nombre" name="nombre">
               <span class="error-message" id="nombre-error"></span>
           </div>
           <div class="form-group">
               <label for="apellido">Last Name:</label>
               <input type="text" id="apellido" name="apellido">
               <span class="error-message" id="apellido-error"></span>
           </div>
           <div class="form-group">
               <label for="email">Email:</label>
               <input type="text" id="email" name="email">
               <span class="error-message" id="email-error"></span>
           </div>
           <div class="form-group">
               <label for="nota">Note:</label>
               <input type="text" id="nota" name="nota">
               <span class="error-message" id="nota-error"></span>
           </div>
           <button type="submit">Enviar</button>
       </form>
       </div>
       </div>
         
    </article>`
}