// Player-1 button event Lisener 
document.getElementById('btn-player-1').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-1');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
        disableNextButton('btn-player-1'); 
    }   
    else
    {
        alert("You Already Select Five Players ");
    } 
   })
// Player-2 button event Lisener 
document.getElementById('btn-player-2').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-2');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
        disableNextButton('btn-player-2'); 
    }   
    else
    {
        alert("You Already Select Five Players ");
    }
   })
   // Player-3 button event Lisener 
document.getElementById('btn-player-3').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-3');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
        disableNextButton('btn-player-3'); 
    }   
    else
    {
        alert("You Already Select Five Players ");
    }
   })
   // Player-4 button event Lisener 
document.getElementById('btn-player-4').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-4');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
        disableNextButton('btn-player-4'); 
    }   
    else
    {
        alert("You Already Select Five Players ");
    }
   })
   // Player-5 button event Lisener 
document.getElementById('btn-player-5').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-5');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
        disableNextButton('btn-player-5'); 
    }   
    else
    {
        alert("You Already Select Five Players ");
    }

   })
   // Player-6 button event Lisener 
document.getElementById('btn-player-6').addEventListener('click', function(){
    const playerNameString= getPlayerName('player-6');
    const listLength = isLiLength();    
    if(listLength < 5)
    {
        addChild(playerNameString);
        disableNextButton('btn-player-6'); 
    }   
    else
    {
        alert("You Already Select Five Players ");
    } 
   })