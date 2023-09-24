import { GetCharacterById } from "../services/apiCall.js";
import { RenderizarNavbar } from "../render/navbar.js";
import { RenderizarFooter } from "../render/footer.js";
import { RenderizarDetalle } from "../render/detail.js";

export const DetailRender = () => {
  // MAIN
  RenderizarNavbar(false)
  RenderizarFooter()
  var urlParams = new URLSearchParams(window.location.search);
  var characterId = urlParams.get('id');
  GetCharacterById(characterId, RenderizarDetalle)

};
