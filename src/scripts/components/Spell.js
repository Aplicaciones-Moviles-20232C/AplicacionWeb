export const Spell = (name,detail) =>{
    return `<article class="spell">
                <div class="spell-title">
                    <h3>${name}</h3>
                </div>
                <div class="spell-detail">
                    <h3>${detail}</h3>
                </div>
            </article>`
}