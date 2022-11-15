const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output'); 
console.log(outputEl);

inputEl.addEventListener('click', function(event) {
    if (inputEl.value.length === 0) {
        outputEl.textContent = "Anonymous" }
        else {
            outputEl.textContent = event.currentTarget.value;  
        }
    });

