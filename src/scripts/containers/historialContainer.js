import { Navbar } from "../components/Navbar.js"
import { EfectoNavbar,ActualizarNavbar } from "../effects/Navbar.js";
import { RenderizarFooter } from "../render/footer.js";
import { RenderizarHistorial } from "../render/historial.js";
import { RenderizarNavbar } from "../render/navbar.js";

export function HistorialRender(){
    RenderizarNavbar()
    RenderizarFooter()
    RenderizarHistorial()
}