import { ButtonCustom } from "../components/ButtonCustom.js";


export const IndexRender = () => {
    let root = document.getElementById("root");
    root.innerHTML += ButtonCustom("Este es el boton");
}