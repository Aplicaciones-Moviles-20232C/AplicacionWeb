export const Navbar = (esIndex)=> {
  let casas = " "
  if (esIndex){
    casas=`<li class="nav-menu-item">
  <h2>
    <a  class="nav-menu-link nav-link actualizar-casa">Gryffindor</a>
    </h2>
  </li>
  <li class="nav-menu-item">
  <h2>
    <a  class="nav-menu-link nav-link actualizar-casa">Hufflepuff</a>
    </h2>
  </li>
  <li class="nav-menu-item">
  <h2>
    <a  class="nav-menu-link nav-link actualizar-casa">Slytherin</a>
    </h2>
  </li>
  <li class="nav-menu-item">
  <h2>
    <a  class="nav-menu-link nav-link actualizar-casa">Ravenclaw</a>
    </h2>
  </li>`
  }
  let navbar = `<header class="header">
  <nav class="nav">
    <button class="nav-toggle" aria-label="Abrir menú">
      <i class="fas fa-bars"></i>
    </button>
    <ul class="nav-menu">
      <li class="nav-menu-item">
      <h2>
        <a href="../../src/views/index.html" class="nav-menu-link nav-link">Personajes</a>
     </h2> 
        </li>
      <li class="nav-menu-item">
      <h2>
        <a href="#" class="nav-menu-link nav-link">Favoritos</a>
        </h2>
      </li>
      <li class="nav-menu-item">
      <h2>
        <a href="#" class="nav-menu-link nav-link">Historial</a>
        </h2>
      </li>
      <li class="nav-menu-item">
      <h2>
        <a href="#" class="nav-menu-link nav-link">Mas informacion</a>
        </h2>
      </li>
      ${casas}
    </ul>
  </nav>
</header>`
    return(navbar)
}

