export const Paginacion = (principio,final) =>{
    let estaAlPrincipio = ""
    let estaAlFinal = ""
    if(principio){
        estaAlPrincipio = disabled
    }
    if(final){
        estaAlFinal = disabled
    }
    return`<button type="button" ${estaAlPrincipio}><<</button>
        <button type="button" ${estaAlFinal}>>></button>`
}