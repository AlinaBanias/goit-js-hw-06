const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ItemEl = document.querySelector("#ingredients");

const elements = ingredients.map(option => {
  const ListEl = document.createElement("li");
  ListEl.classList.add(".item");
  ListEl.textContent = option;

  return ListEl;
});

console.log(elements);
ItemEl.append(...elements);