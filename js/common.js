// Get PlayerName Function 
function getPlayerName(elementID){
    const playerName = document.getElementById(elementID);
    const playerNameString = playerName.innerText;
    return playerNameString;
}
// Add li Function  
function addChild(playerNameString){
    let list = document.querySelector('#order-list'); 
    
    let item = document.createElement('li'); // create li node
    let itemText = document.createTextNode(playerNameString); // create text node
    
    item.appendChild(itemText); // append text node to li node
    list.appendChild(item);
}
// Button Disable Function 
function disableNextButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
    const selectedButton = document.getElementById(btnId);
    selectedButton.style.backgroundColor = '#A2A9AF';
   
}
// List li length calculate Function 
function isLiLength()
{
    const listLi = document.querySelectorAll("li");
   const  listLength = listLi.length;
    return listLength;
}