```javascript
console.log("VOID carregada com sucesso.");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-8px)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px)";

});

});
```
