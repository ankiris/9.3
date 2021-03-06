'use strict';
//modale
var modals = document.querySelectorAll('.modal');
//open modal
var name;

var showModalOver = function(){
  document.querySelector('#modal-overlay').classList.add('show');
  document.querySelector('#modal-two').classList.add('show');
  var endResult = document.querySelector('#score');
  endResult.innerHTML = ' <div class="content"> <p>Final result: <br> You '+params.wins+ ' : '+params.loses+' Computer</p></div>'
  var scoreTable = document.querySelector('#table')
  scoreTable.innerHTML = '<tr><th>Round</th><th>Player</th><th>Computer</th><th>Result</th></tr> '+progressTable.join(' ')+''
};

//hide modal
var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
  var modale = document.querySelectorAll('.modal')
  for(var i = 0; i < modale.length; i++){
    modale[i].classList.remove('show');
  }
  params = {
    rounds: 0,
    loses: 0,
    wins: 0,
    games: 0,
    roundNumber: 0,
    progress: []
  };
  round.innerHTML = '';
  output.innerHTML = ''; 
  result.innerHTML = '';
  comment.innerHTML = '';
  progressTable = []; 
  scoreTable.innerHTML = '';
};

var closeButtons = document.querySelectorAll('.modal .close');

for(var i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', hideModal);
}

document.querySelector('#modal-overlay').addEventListener('click', hideModal);
     

for(var i = 0; i < modals.length; i++){
  modals[i].addEventListener('click', function(event){
    event.stopPropagation();
  });
}
//variables
var output = document.getElementById("output"); 
var comment = document.getElementById("comment"); 
var result = document.getElementById("result"); 
var round = document.getElementById("round"); 
var playerName;
var progressTable = []; 
var resultTable;
var params = {
  rounds: 0,
  loses: 0,
  wins: 0,
  games: 0,
  roundNumber: 0,
  progress: []
};

//start button
var button = document.getElementById('start-game');
button.addEventListener('click', newGame);
function newGame(){
  params.rounds = window.prompt('How many rounds you would like to play');
  if (!isNaN(params.rounds) && params.rounds>0){
   document.getElementById("game").style.display = "block";
   round.innerHTML = '<br> You have ' +params.rounds+' rounds.'
  } else {
    output.innerHTML = 'Input needs to be a number' + '<br><br>' 
  }
  document.querySelector('#modal-overlay').classList.remove('show');
}
//player move buttons
var moves = document.querySelectorAll('.player-move');
for (var i=0; i < moves.length; i++) {
  moves[i].addEventListener('click', user) 
};
//Print out result of the round 
function results() {
  if (params.games < params.rounds) {  
  result.innerHTML = 'You:'+params.wins+ ' - Computer:'+params.loses+'<br><br> games played: '+params.games+'.'
  }
}
//game 
function user(){
  var playerMove = this.getAttribute('data-move');

  //generates computer's move
  var compMove = Math.floor(Math.random() * 3);
    if (compMove == 0)  {compMove = "rock";
    } else if(compMove == 1) {compMove = "paper";
    } else{compMove = "scissors";
    }; 
    //compares computer and player move
    function compare (player, comp) {
      if (player === comp){
        comment.innerHTML = 'It`s a tie!';
        resultTable = 'It`s a tie!';
      } else if (
        player == 'rock' && comp == 'scissors' ||
        player == 'scissors' && comp == 'paper' ||
        player == 'paper' && comp == 'rock'
      ){
          params.wins++;
          comment.innerHTML = 'You won!';
          resultTable = 'You won!'
        } else {
          params.loses++;
          comment.innerHTML = 'You lost!';
          resultTable = 'You lost!'
        }
      }
       
  compare (playerMove, compMove);
  params.games = params.wins + params.loses;
  //print out the result
  output.innerHTML = 'You played '+playerMove+ '<br> Computer played '+compMove + '<br><br>'; 
  result.innerHTML = 'You:'+params.wins+ ' - Computer:'+params.loses+ '<br><br> Games without a tie: '+params.games+'.';
  //creates entry of progress after every round
  params.roundNumber++
  params.progress.push([params.roundNumber, playerMove, compMove, resultTable]);
  
  console.log(params.progress)
  gameOver()
}
//game over
function gameOver() {
  if (params.roundNumber == params.rounds) {
    gameOverTable(true)
    showModalOver(true);
    document.getElementById("game").style.display = "none";
    params.rounds = 0;
    params.loses = 0;
    params.wins = 0;
    params.games = 0;
    params.progress = []
  };
};
//creates a html of a row of a progress table
function gameOverTable() {
  for (i=0; i < params.progress.length; i++){
    var rows = params.progress[i];
    progressTable.push('<tr><td>'+rows[0]+'</td><td>'+rows[1]+'</td><td>'+rows[2]+'</td><td>'+rows[3]+'</td></tr>');
    console.log(progressTable)
  };
}
