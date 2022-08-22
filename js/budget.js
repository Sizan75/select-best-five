
function getValueById(elementId){
    const playerCost = document.getElementById(elementId);
    const playerCostString = playerCost.value;
    const newPlayerCost = parseFloat(playerCostString);
    return newPlayerCost;
}
// Calculate Per Player Cost Button 
document.getElementById('btn-calculate').addEventListener('click', function(){

    const newPlayerCost= getValueById('per-player-cost');

    const playerTotalExpenses= document.getElementById('player-total-expenses');
    
    const listLength = isLiLength();  
    const total = newPlayerCost * listLength ;
    playerTotalExpenses.innerText = total ;
})