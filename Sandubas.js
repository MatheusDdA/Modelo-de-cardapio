function creatDescricao(sabor, preço1, preço2, preço3) {
    return `<div class="teto">
                <p>${sabor}</p>
                <p>${preço1}</p>
                <p>${preço2}</p>
                <p>${preço3}</p>
            </div>
            `
}
function creatSanduiche(sabor, ingred) {
    return `<div class="descrição">
                <p>${sabor}</p>
                <p>${ingred}</p>
            </div>
            `
}
document.querySelector(".add-sanduiche").innerHTML = `
    <section>
        ${creatDescricao("<span>Sabor</span>", "<span>&nbsp&nbsp&nbspP.<br>25,00</span>", "<span>&nbsp&nbsp&nbspM.<br>30,00</span>", "<span>&nbsp&nbsp&nbspG.<br>35,00</span>")}

        ${creatSanduiche("wwww", "xxx xxxxxx xxxxx xx xxxxx")}

        ${creatSanduiche("- Escarola", "&nbspEscarola temperada com aliche, cebola, mussarela e azeitonas verdes")}
    </section>
`