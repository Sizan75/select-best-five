// Get PlayerName Function 
function getPlayerName(elementID){
    const playerName = document.getElementById(elementID);
    const playerNameString = playerName.innerText;
    return playerNameString;
}
// Add li Function  
function addLiChild(playerNameString){
    let list = document.querySelector('#order-list'); 
    
    let item = document.createElement('li'); 
    let itemText = document.createTextNode(playerNameString); 
    
    item.appendChild(itemText); 
    list.appendChild(item);
}
// Button Disable Function 
function disableButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
    const selectedButton = document.getElementById(btnId);
    selectedButton.style.backgroundColor = '#A2A9AF';
   
}
// List li length calculate Function 
function liLength()
{
    const listLi = document.querySelectorAll("li");
   const  listLength = listLi.length;
    return listLength;
}
// function for  converting input value 
function getValueById(elementId){
    
    const inputValue = document.getElementById(elementId);
    const inputString = inputValue.value;
    const newPlayerCost = parseFloat(inputString);
    return newPlayerCost;
}