export const Navbar = ()=> {
    return(`<header class="header">
    <nav class="nav">
    <img src="/src/img/casas.png" alt="hogwarts" class="img-casas">
    <a href="#" class="logo nav-link" ></a>
      <button class="nav-toggle" aria-label="Abrir menú">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu">
        <li class="nav-menu-item">
        <h2>
          <a href="#" class="nav-menu-link nav-link">Personajes</a>
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
      </ul>
    </nav>
  </header>`)
}