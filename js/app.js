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
        selection();
    }

    //deleting the lists

    document.getElementsByClassName('delete')[i].onclick = function() {
        currentCards[i].outerHTML = null;
        currentCards.splice(i, 1)
        savetoStorage();
        loadUp();
    }
}}
loadUp();



function selection() {
    cardData.innerHTML = '<h1>' + currentCards[dataNum].innerText + '</h1>' +
    '<input type=text id="listName"> <input type=button value="Add List Item" id="submitData">';
    if(localStorage.getItem('cardData' + dataNum)){
        cardData.innerHTML = localStorage.getItem('cardData' + dataNum);
    }


    document.getElementById('submitData').onclick = function(){
        const listData = document.createElement('div');
        listData.classList.add('data')
        listData.innerHTML = document.getElementById('listName').value + '<input type=button value="delete" class="dataDelete">';
        cardData.appendChild(listData);
        storedListData.push(listData);
        document.getElementById('listName').value = null;
        dataStorageSave();
        
    }
    for(let i = 0; i < document.getElementsByClassName('data').length; i++){
        document.getElementsByClassName('dataDelete')[i].onclick = function(){
        document.getElementsByClassName('data')[i].outerHTML = null;
        dataStorageSave();
        selection();
        if(document.getElementsByClassName('data').length == 0){
            localStorage.removeItem('cardData' + dataNum);
        }
    }}

}