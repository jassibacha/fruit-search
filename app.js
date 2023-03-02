const input = document.querySelector('.fruit-search');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
    'Apple',
    'Apricot',
    'Avocado 🥑',
    'Banana',
    'Bilberry',
    'Blackberry',
    'Blackcurrant',
    'Blueberry',
    'Boysenberry',
    'Currant',
    'Cherry',
    'Coconut',
    'Cranberry',
    'Cucumber',
    'Custard apple',
    'Damson',
    'Date',
    'Dragonfruit',
    'Durian',
    'Elderberry',
    'Feijoa',
    'Fig',
    'Gooseberry',
    'Grape',
    'Raisin',
    'Grapefruit',
    'Guava',
    'Honeyberry',
    'Huckleberry',
    'Jabuticaba',
    'Jackfruit',
    'Jambul',
    'Juniper berry',
    'Kiwifruit',
    'Kumquat',
    'Lemon',
    'Lime',
    'Loquat',
    'Longan',
    'Lychee',
    'Mango',
    'Mangosteen',
    'Marionberry',
    'Melon',
    'Cantaloupe',
    'Honeydew',
    'Watermelon',
    'Miracle fruit',
    'Mulberry',
    'Nectarine',
    'Nance',
    'Olive',
    'Orange',
    'Clementine',
    'Mandarine',
    'Tangerine',
    'Papaya',
    'Passionfruit',
    'Peach',
    'Pear',
    'Persimmon',
    'Plantain',
    'Plum',
    'Pineapple',
    'Pomegranate',
    'Pomelo',
    'Quince',
    'Raspberry',
    'Salmonberry',
    'Rambutan',
    'Redcurrant',
    'Salak',
    'Satsuma',
    'Soursop',
    'Star fruit',
    'Strawberry',
    'Tamarillo',
    'Tamarind',
    'Yuzu',
];

function search(inputVal) {
    let results = fruit.filter((item) =>
        item.toLowerCase().includes(inputVal.toLowerCase())
    );
    //console.log(results);
    return results;
}

function searchHandler(e) {
    // Get the current value of input search
    const inputVal = e.target.value;
    // Get the array of results
    const results = search(inputVal);
    // console.log(results);
    // Call showSuggestions
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    const item = results.map((result) => {
        const li = document.createElement('li');
        li.addEventListener('mouseenter', () => {
            li.classList.add('hovered');
        });
        li.addEventListener('mouseleave', () => {
            li.classList.remove('hovered');
        });
        const regExp = new RegExp(inputVal, 'gi');
        // g = global (look through entire item), i = case insensitive
        // https://stackoverflow.com/q/9833419
        const fruit = result.replace(regExp, (match) => {
            return `<span>${match}</span>`;
        });
        // Set up a callback function in the replace method instead of a string to allow it to keep the original casing for an item
        li.innerHTML = fruit;
        return li;
    });
    // Remember to clear the suggestions div.. this took longer than I'd like to admit
    suggestions.innerHTML = '';
    // foreach here on item to append them?
    item.forEach((fruitItem) => suggestions.appendChild(fruitItem));
}

function useSuggestion(e) {
    // update the value of the input field with the selected suggestion
    // console.log(e.target.textContent);
    // textContent takes the text content of the element and removes all inner html (spans, etc)
    input.value = e.target.textContent;
    suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
