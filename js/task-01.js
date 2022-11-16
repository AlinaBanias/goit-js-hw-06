const numbersOfCategories = document.querySelector("ul");
console.log('Number of categories:', numbersOfCategories.children.length);

for (const item of numbersOfCategories.children) { 
     const titleEl = item.firstElementChild;  
     console.log('Category:', titleEl.textContent);  
     const itemsEl = item.lastElementChild;  
     console.log('Elements:', itemsEl.children.length);
    }