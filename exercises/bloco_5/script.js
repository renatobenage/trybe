const ingredients = [
    'Feijão',
    'Arroz',
    'Ovos',
    'Carne seca',
    'Toucinho',
];

const acessUl = document.querySelector('.ingredients-item');

for (let index = 0; index < ingredients.length; index += 1) {
    const through = ingredients[index];
    // console.log(through)
    const createlI = document.createElement('li');
    // console.log(createlI)
    createlI.innerText = through;
    createlI.className = 'ingredients-item-list'
    // console.log(createlI)
    acessUl.appendChild(createlI)
}

let ingredientListItems = document.querySelectorAll('.ingredients-item-list')
// console.log(ingredientListItems)

for (let index = 0; index < ingredientListItems.length; index += 1) {
    let element = ingredientListItems[index]
    // console.log(element)

    if (element.innerHTML.includes('toucinho') {
        acessUl.removeChild();
    }
}