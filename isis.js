let imagem = ["son.png", "com.png", "est.png", "tec.png", "fis.png", "sadd.png", "rell.png", "cria.png", "rotina.png", "higie.png"];
let texto = ["🌙 1. Sono", "🍎 2. Alimentação", "📚 3. Estudo", "📱 4. Tecnologia","🏃 5. Atividade física", "6. 🧠 Saúde mental", "7. 🤝 Bons relacionamentos", "8. 🎨 Criatividade e hobbies", "9. 📅 Organização da rotina", "10.🧴 Higiene geral"
 ];
let peq = ["Dormir bem melhora a concentração, a memória e o humor. Mantenha uma rotina de sono regular.",
     "Prefira refeições variadas e equilibradas, com frutas, verduras e alimentos nutritivos.",
      "Faça pequenas pausas durante os estudos para descansar a mente e melhorar o aprendizado.",
    "Evite usar celulares e computadores pouco antes de dormir para facilitar o relaxamento.",
"Caminhe, dance ou pratique algum exercício de que goste para movimentar o corpo e melhorar o bem-estar.", 
"Reserve um momento para relaxar, reconhecer suas emoções e fazer algo de que gosta.",
"Converse, compartilhe momentos e mantenha contato com pessoas que fazem bem a você.",
"Desenhe, pinte, cozinhe ou experimente uma nova atividade para estimular a criatividade e se divertir.", 
"Planeje suas tarefas e defina prioridades para aproveitar melhor o tempo e evitar a sobrecarga.", 
"Mantenha seu corpo e os ambientes ao seu redor limpos. Lave as mãos regularmente, cuide da higiene bucal e mantenha suas roupas e objetos pessoais limpos para ajudar a prevenir doenças."]
;
let preco = ["Dica para descansar melhor", "Dica para ter mais energia", "Dica para aprender melhor", "Dica para dormir melhor", "Dica para ter mais disposição", "Dica pensando na sua saúde", "Dica pensando na sua saúde", "Dica pensando na sua saúde", "Dica pensando na sua saúde", "Dica pra melhorar sua saúde"
];

let i 
function criarCard() {
    let conta = document.querySelector('.conta');

    for (i = 0; i < texto.length; i++) {
        conta.innerHTML += `<div class="conteiner" id="conteiner">
            <img src="${imagem[i]}" alt="brasas">
            <p class="texto-pequeno">${texto[i]}</p>
             <p class="Preço">${preco[i]}</p>
            <p class="pequeno">${peq[i]}</p>
           

           

        </div>`
    }
}
criarCard()