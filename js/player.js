document.getElementById('btn-player-1').addEventListener('click', function(){
    const playerName = document.getElementById('player-1');
    const playerNameString = playerName.innerText;
    
    const orderList = document.getElementById('order-list');
    const child = orderList.childNode.innerText;
    console.log(child);

})