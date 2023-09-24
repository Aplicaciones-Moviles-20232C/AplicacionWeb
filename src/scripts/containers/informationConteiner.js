import { Information } from "../components/Information.js";
import { RenderizarNavbar } from "../render/navbar.js";
import { RenderizarFooter } from "../render/footer.js";
import { RenderizarMasInformacion } from "../render/informacion.js";

export const InformationRender = () => {
    RenderizarNavbar(false)
    RenderizarFooter()
    RenderizarMasInformacion()
    
  }
  
