import { ActualizarNavbar } from "../effects/Navbar.js";
import { RenderizarFooter } from "../render/footer.js";
import { RenderizarFavoritos } from "../render/favoritos.js";
import { RenderizarNavbar } from "../render/navbar.js";

export function FavoritosRender(){
    RenderizarNavbar()
    RenderizarFooter()
    RenderizarFavoritos()
}