
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

document.getElementById('btn-player-1').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-1');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
    }   
    else
    {
        alert("You r not ");
    }
   disableNextButton('btn-player-1'); 
   })
document.getElementById('btn-player-2').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-2');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
    }   
    else
    {
        alert("You r not ");
    }
   disableNextButton('btn-player-2'); 
   })
document.getElementById('btn-player-3').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-3');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
    }   
    else
    {
        alert("You r not ");
    }
   disableNextButton('btn-player-3'); 
   })
document.getElementById('btn-player-4').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-4');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
    }   
    else
    {
        alert("You r not ");
    }
   disableNextButton('btn-player-4'); 
   })
document.getElementById('btn-player-5').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-5');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
    }   
    else
    {
        alert("You r not ");
    }
   disableNextButton('btn-player-5'); 
   })
document.getElementById('btn-player-6').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-6');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
    }   
    else
    {
        alert("You r not ");
    }
   disableNextButton('btn-player-6'); 
   })