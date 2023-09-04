export const Navbar = ()=> {
    return(`<header class="header">
    <nav class="nav">
      <a href="#" class="logo nav-link">WikiPotter</a>
      <button class="nav-toggle" aria-label="Abrir menú">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu">
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">Personajes</a>
        </li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">Favoritos</a>
        </li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">Historial</a>
        </li>
        <li class="nav-menu-item">
          <a href="#" class="nav-menu-link nav-link">Mas informacion</a>
        </li>
      </ul>
    </nav>
  </header>`)
}