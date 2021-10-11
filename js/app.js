//add card setup

const createCard = document.getElementById('addCard');
let recCardName = document.getElementById('cardName');
let currentCards = [];
let cardNum = [{
    id: 0,
    name: "card"
},];
const listsContainer = document.querySelector('#cardOp');
let cardData = document.getElementById('cardData');


//creating a card

createCard.onclick = function(){
cardNum.forEach(list => {
const listElement = document.createElement('div')
listElement.classList.add('card')
listElement.innerHTML = '<i class="fas fa-sticky-note"></i>' + recCardName.value + '<input type="button" value="delete" class="delete">';
listsContainer.appendChild(listElement);
currentCards.push(listElement);
savetoStorage();
loadUp();
})
recCardName.value = "";
}

//Local Storage

if(localStorage.getItem('cards')){
    listsContainer.innerHTML = localStorage.getItem('cards');
}

for(let i = 0; i < document.getElementsByClassName('card')["length"]; i++){
    currentCards.push(document.getElementsByClassName('card')[i])
    }


function savetoStorage(){
    localStorage.setItem('cards', listsContainer.innerHTML);
}

//list editing

let storedListData = [];


//List data in local storage

let dataNum = 0;


function dataStorageSave(){
localStorage.setItem('cardData' + dataNum, cardData.innerHTML);
}

//creating the list data functions


function loadUp(){
    dataNum = 0;
for(let i = 0; i < currentCards.length; i++){
    currentCards[i].onclick = function(){
        dataNum = i;
        currentCards[i].classList.add('selected');
        selection();
    }

    //deleting the lists

    document.getElementsByClassName('delete')[i].onclick = function() {
        listsContainer.innerHTML = null;
        currentCards = [];
        savetoStorage();
    }
}}
loadUp();

function selection() {
    cardData.innerHTML = '<h1>' + currentCards[dataNum].innerText + '</h1>';
    currentCards[dataNum].classList.remove('selected');

}