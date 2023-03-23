console.log('huhu');

// lvl_1_3

/*
const output = document.querySelector('output');

const button = document.querySelectorAll('button');

const list = document.querySelector('#myList');

const listElement = document.querySelectorAll('li');

const button2 = document.querySelector('.unten');

button[0].addEventListener('click', () => {
    output.innerHTML = list.firstElementChild.innerHTML;
})

button[1].addEventListener('click', () => {
    output.innerHTML = list.lastElementChild.innerHTML;
})

button[2].addEventListener('click', () => {
    output.innerHTML = list.firstElementChild.nextElementSibling.innerHTML;
})

button[3].addEventListener('click', () => {
    output.innerHTML = list.lastElementChild.previousElementSibling.innerHTML;
})
*/

// lvl_1_9

// const selectedElement = document.querySelector('#farbeAuswahlen');
// console.log(selectedElement);

/*
let farbe = document.querySelector('#farbeAuswahlen');

const removeItems = () => {
    event.preventDefault();
    console.log(farbe.selectedIndex);
    farbe.remove(farbe.selectedIndex);
}
*/

// lvl_2_7

/*
const button = document.querySelector('button');
let counter = 0;

button.addEventListener('click', () => {
    
    if (counter %10 == 0) {
        let divRound = document.createElement('div');
        document.body.children[1].appendChild(divRound);
        divRound.classList.add("weiss");
        divRound.classList.add("rechteck");
        divRound.textContent = counter;
    }   
    else {
        let divSquare = document.createElement('div');
        document.body.children[1].appendChild(divSquare);
        divSquare.classList.add("rechteck");
        divSquare.textContent = counter;
    }
    counter ++
});
*/

// lvl_2_8
const articleInput = document.querySelector('input[type="text"]');
const button = document.querySelector('input[type="submit"]');

let enterKey = document.querySelector('input[type="text"]');

button.addEventListener('click', () => {
    let listElement = document.createElement('li');
    listElement.textContent = articleInput.value;
    document.body.children[0].children[4].appendChild(listElement)
})

enterKey.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        let listElement = document.createElement('li');
        listElement.textContent = articleInput.value;
        document.body.children[0].children[4].appendChild(listElement)
    }
})