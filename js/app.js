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
listElement.innerHTML = '<i class="fas fa-sticky-note"></i>' + recCardName.value + '<input style="display:none;" type="button" value="delete" class="delete">';
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

//creating the list data functions and selecting a container


function loadUp(){
    dataNum = 0;
for(let i = 0; i < currentCards.length; i++){
    currentCards[i].onclick = function(){
        for(let i = 0; i < document.getElementsByClassName('delete').length;i++){
            document.getElementsByClassName('delete')[i].style.display = "none";
        }
        dataNum = i;
        selection();
        showDelete(i);
    }

    //deleting the lists
    document.getElementsByClassName('delete')[i].onclick = function() {
        checkDelete(i);
        savetoStorage();
        loadUp();
    }


}}
loadUp();

function checkDelete(deleteNum){
    if(localStorage.getItem('cardData' + deleteNum) == "deleted" || document.getElementsByClassName('data').length == 0){
        console.log('deleted')
        currentCards[deleteNum].style.display = 'none';
    }else{
        alert('please empty the list before deleting the container')
    }
}


function selection() {
    console.log('genereated')
    cardData.innerHTML = '<h1>' + currentCards[dataNum].innerText + '</h1>' +
    '<input type=text id="listName"> <input type=button value="Add List Item" id="submitData">';
    if(localStorage.getItem('cardData' + dataNum)){
        cardData.innerHTML = localStorage.getItem('cardData' + dataNum);
    }else{
        dataStorageSave();
    }
    

    for(let i = 0; i < document.getElementsByClassName('data').length; i++){
        document.getElementsByClassName('dataDelete')[i].onclick = function(){
        document.getElementsByClassName('data')[i].outerHTML = null;
        dataStorageSave();
        selection();
        if(document.getElementsByClassName('data').length == 0){
            localStorage.setItem('cardData' + dataNum, "deleted");
        }
    }}


    document.getElementById('submitData').onclick = function(){
        const listData = document.createElement('div');
        listData.classList.add('data')
        listData.innerHTML = document.getElementById('listName').value + '<input type=button value="delete" class="dataDelete">';
        cardData.appendChild(listData);
        storedListData.push(listData);
        document.getElementById('listName').value = null;
        dataStorageSave();
        selection();
        
    }


}

function showDelete(check){
    document.getElementsByClassName('delete')[check].style.display = 'block';
}