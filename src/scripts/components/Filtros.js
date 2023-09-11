export const Filtro = () =>{
    return `<div class="search-container">
                <input class="search-input" type="text" placeholder="Buscar personaje">
            </div>
            <div id="div-orderButton">
                <button id="orderButton" class="asc" type="button"><h3>Ordenar por nombre: Ascendente</h3></button>
                <select aria-label="casas" name="casas" id="select-house" value="na">
                    <option value="na" selected disabled><h3>House</h3></option>
                    <option value="Gryffindor"><h3>Gryffindor</h3></option>
                    <option value="Slytherin"><h3>Slytherin</h3></option>
                    <option value="Ravenclaw"><h3>Ravenclaw</h3></option>
                    <option value="Hufflepuff"><h3>Hufflepuff</h3></option>
                    <option value="na"><h3>All</h3></option>
                </select>
            <div>`
}