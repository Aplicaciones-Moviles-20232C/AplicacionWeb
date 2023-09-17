import { Navbar } from "../components/Navbar.js"
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
export function FavoritosRender(){
    $("#root").html(Navbar(false))
    EfectoNavbar()

}