export const Navbar = (esIndex)=> {
  let casas = ""
  let botonHome = `<li class="nav-menu-item">
  <h2>
    <a href="../../src/views/index.html" class="nav-menu-link nav-link">WikiPotter</a>
 </h2> 
    </li>`
  if (esIndex){
    casas=`<li class="nav-menu-item">
  <h2>
    <a class="nav-menu-link nav-link actualizar-casa selected">Gryffindor</a>
    </h2>
  </li>
  <li class="nav-menu-item">
  <h2>
    <a class="nav-menu-link nav-link actualizar-casa">Hufflepuff</a>
    </h2>
  </li>
  <li class="nav-menu-item">
  <h2>
    <a class="nav-menu-link nav-link actualizar-casa">Slytherin</a>
    </h2>
  </li>
  <li class="nav-menu-item">
  <h2>
    <a class="nav-menu-link nav-link actualizar-casa">Ravenclaw</a>
    </h2>
  </li>`
  botonHome = ""
  }
  let navbar = `<header class="header">
  <nav class="nav">
    <button class="nav-toggle" aria-label="Abrir menú">
      <i class="fas fa-bars"></i>
    </button>
    <ul class="nav-menu">
      ${botonHome}
      <li class="nav-menu-item">
      <h2>
        <a href="../../src/views/favoritos.html" class="nav-menu-link nav-link">Favoritos</a>
        </h2>
      </li>
      <li class="nav-menu-item">
      <h2>
        <a href="../../src/views/historial.html" class="nav-menu-link nav-link">Historial</a>
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

