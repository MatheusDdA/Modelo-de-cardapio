function creatDescricao(sabor, preço1, preço2, preço3) {
    return `<div class="teto">
                <p>${sabor}</p>
                <p>${preço1}</p>
                <p>${preço2}</p>
                <p>${preço3}</p>
            </div>
            `
}
function creatPizza(comida, ingred,) {
    return `<div class="descrição">
                <p>${comida}</p>
                <p>${ingred}</p>
            </div>
            `
}
document.querySelector(".add-pizza").innerHTML = `
    <section>
        ${creatDescricao("<span>Sabor</span>", "<span>&nbsp&nbsp&nbspP.<br>25,00</span>", "<span>&nbsp&nbsp&nbspM.<br>30,00</span>", "<span>&nbsp&nbsp&nbspG.<br>35,00</span>")}
        
        ${creatPizza("- Frango com catupiri", "&nbspMussarela com molho de tomate temperado")}
    
        ${creatPizza("- Escarola", "&nbspEscarola temperada com aliche, cebola, mussarela e azeitonas verdes")}

        ${creatPizza("- Milho", "&nbspCatupiry coberto de milho")}

        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
        ${creatPizza()}
    </section>`


//Mussarela com molho de tomate temperado
//Escarola temperada com aliche, cebola, mussarela e azeitonas verdes
//Catupiry coberto de milho