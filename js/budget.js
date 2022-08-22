

// Calculate Per Player Cost Button 
document.getElementById('btn-calculate').addEventListener('click', function(){

    const newPlayerCost= getValueById('per-player-cost');

    const playerTotalExpenses= document.getElementById('player-total-expenses');
    
    const listLength = isLiLength();  
    const total = newPlayerCost * listLength ;
    playerTotalExpenses.innerText = total ;
})
// Calculate Total Button 
document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerCost = getValueById('manager-expense');
    const coachCost = getValueById('coach-expense');

    const playerTotalExpenses= document.getElementById('player-total-expenses');
    const playerTotalExpensesString = playerTotalExpenses.innerText;
    const playerTotalCost = parseFloat(playerTotalExpensesString);

    const total= document.getElementById('total-expenses');
    const totalString = total.innerText;
    const totalExpenses = parseFloat(totalString);

    const newTotal = managerCost + coachCost + playerTotalCost ;
    total.innerText=newTotal;
})