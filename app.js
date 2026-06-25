console.log("VOID carregada com sucesso.");

document.addEventListener("DOMContentLoaded", () => {

let carrinho = JSON.parse(localStorage.getItem("voidCarrinho")) || [];

let favoritos = JSON.parse(localStorage.getItem("voidFavoritos")) || [];

/* ANIMAÇÃO DOS CARDS */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-8px)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0px)";
});

});

/* ADICIONAR AO CARRINHO */

const botoesCarrinho = document.querySelectorAll(".add-cart");

botoesCarrinho.forEach(botao => {

botao.addEventListener("click", () => {

const produto = {

nome: botao.dataset.nome,

preco: botao.dataset.preco,

imagem: botao.dataset.imagem

};

carrinho.push(produto);

localStorage.setItem(
"voidCarrinho",
JSON.stringify(carrinho)
);

alert("Produto adicionado ao carrinho!");

});

});

/* FAVORITOS */

const botoesFavoritos = document.querySelectorAll(".add-favorite");

botoesFavoritos.forEach(botao => {

botao.addEventListener("click", () => {

const produto = {

nome: botao.dataset.nome,

preco: botao.dataset.preco,

imagem: botao.dataset.imagem

};

favoritos.push(produto);

localStorage.setItem(
"voidFavoritos",
JSON.stringify(favoritos)
);

alert("Adicionado aos favoritos!");

});

});

});
