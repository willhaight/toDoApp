//add card setup

const createCard = document.getElementById('addCard');
let recCardName = document.getElementById('cardName');
let cardStore = document.getElementById('cardOp');
let make = 0;

//creating a card

createCard.onclick = function(){
    make++;
    addCard();
}

function addCard(){
    cardStore.innerHTML += "<div id=card" + make + "><i class='fas fa-sticky-note'>" +
    "</i><span>" + recCardName.value + "</span></div>"
}

