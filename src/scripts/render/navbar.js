import { EfectoNavbar } from "../effects/Navbar.js";
import { Navbar } from "../components/Navbar.js";

//Renderiza el navbar
export const RenderizarNavbar = (esIndex)=>{
    $("#root").html(Navbar(esIndex));
    EfectoNavbar();
}