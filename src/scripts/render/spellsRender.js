import { Spell } from "../components/Spell.js"
export const RenderSpells = (conjuros)=>{
    conjuros = MezclarArray(conjuros)
    for (let i = 0; i < 10; i++) {
      $("#conjuros").append(Spell(conjuros[i].name,conjuros[i].description))
    }
}



function MezclarArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}