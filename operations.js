
 let result = "";
    // computer move-------------
    // 1 - Paper
    // 2 - Scissor
    // 3 - Rock

    //document.querySelector('.js-score').innerHTML = 

    //score storing
    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

    /*
    if(!score){ // !score == (score ===null)
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }
      */
    
  
    

  //generate computer move
  function pickComputerMove(){
    const randomNumber = (Math.random() * (3 - 1) + 1).toFixed(0);//generane random number in range of (1 to 3) eg: 1,2,3
    return randomNumber;
  }

  function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0
    localStorage.removeItem('score');
    updateScore();
  }

  //update score function
  function updateScore(){
    document.getElementById("summery").innerHTML = `<h4>Match Summery: Wins - ${score.wins} | Losses - ${score.losses} | Ties - ${score.ties}</h4>`;
  }

  //check win , loose or tie
  function statusGame(status){
    document.querySelector(".result").innerHTML = `You ${status}`;
  }

  //select computer move and player move
  function movesSelect(computerMove, yourMove){
    const playerMove = yourMove.charAt(0).toUpperCase()+yourMove.slice(1);//capitalize first letter and rest keep simple.
    
    
    document.querySelector(".moves").innerHTML = `You <img src="assets/${playerMove}.png" class="move-icon-result"> <img src="assets/${computerMove}.png" class="move-icon-result"> Computer`;
  }



  function playGame(playerMove){
    //getting the computer move
    const computerMove = pickComputerMove();
    //rock function
    if(playerMove === 'Rock'){
      if(computerMove == 1){
        ++score.losses;
        //alert('Loose\nComputer got Paper');
        movesSelect("Paper",playerMove);
        statusGame("Loose");
        updateScore();
      }
      else if(computerMove == 2){
        ++score.wins;
        //alert('Won\nComputer got Scissor');
        movesSelect("Scissor",playerMove);
        statusGame("Won");
        updateScore();
      }
      else if(computerMove == 3){
        ++score.ties;
        //alert('Tie\nComputer got Rock');
        movesSelect("Rock",playerMove);
        statusGame("Tie");
        updateScore();
      }
    }
    //paper function
    else if(playerMove === 'Paper'){
      if(computerMove==1){
        ++score.ties;
        //alert('Tie\nComputer got Paper');
        movesSelect("Paper",playerMove);
        statusGame("Tie");
        updateScore();
      }
      else if(computerMove == 2){
        ++score.losses;
        //alert('Loose\nComputer got Scissor');
        movesSelect("Scissor",playerMove);
        statusGame("Loose");
        updateScore();
      }
      else if(computerMove == 3){
        ++score.wins;
        //alert('Won\nComputer got Rock');
        movesSelect("Rock",playerMove);
        statusGame("Won");
        updateScore();
      }
    }
    //scissor function
    else if(playerMove === 'Scissor'){
      if(computerMove==1){
        ++score.wins;
        //alert('Won\nComputer got Paper');
        movesSelect("Paper",playerMove);
        statusGame("Won");
        updateScore();
      }
      else if(computerMove == 2){
        ++score.ties;
        //alert('Tie\nComputer got Scissor');
        movesSelect("Scissor",playerMove);
        statusGame("Tie");
        updateScore();
      }
      else if(computerMove == 3){
        ++score.losses;
        //alert('Loose\nComputer got Rock');
        movesSelect("Rock",playerMove);
        statusGame("Loose");
        updateScore();
      }
    }
    else{
      alert("Unexpected Error!");
    }

    localStorage.setItem('score', JSON.stringify(score)); //set loacal storage to items.
  }