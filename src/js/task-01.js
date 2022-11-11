const Numbersofcategories = document.querySelectorAll("li.item");
console.log('Number of categories :', Numbersofcategories.length);

const category1 = Numbersofcategories[0].firstElementChild;
console.log('Category : ' , category1.textContent);
const listAlleys = category1.nextElementSibling;

const childOfList = listAlleys.children.length;
console.log('Elements : ', childOfList);

const category2 = Numbersofcategories[1].firstElementChild;
console.log('Category : ', category2.textContent);
const listAlleys2 = category2.nextElementSibling;

const childOfList2 = listAlleys2.children.length;
console.log('Elements : ', childOfList2);

const category3 = Numbersofcategories[2].firstElementChild;
console.log('Category : ', category3.textContent);
const listAlleys3 = category3.nextElementSibling;

const childOfList3 = listAlleys3.children.length;
console.log('Elements : ', childOfList3);