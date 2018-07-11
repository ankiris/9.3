'use strict';
//modale
var modals = document.querySelectorAll('.modal');
//open modal
/*var showModalStart = function(){
  event.preventDefault();
    document.querySelector('#modal-overlay').classList.add('show');
    document.querySelector('#modal-one').classList.add('show');
    var endResult = document.querySelector('#modal-one');
    endResult.innerHTML += '<header>GAME OVER</header>  <div class="content"> <p>Finall result: You:'+params.wins+ ' - Computer:'+params.loses+'</p> </div>'
    }; 
*/
/*var modalLinks = document.querySelector('.modal-start');
modalLinks.addEventListener('click', showModalStart);
*/
var showModalOver = function(){
  document.querySelector('#modal-overlay').classList.add('show');
  document.querySelector('#modal-two').classList.add('show');
  var endResult = document.querySelector('#score');
  endResult.innerHTML = ' <div class="content"> <p>Finall result: You '+params.wins+ ' : '+params.loses+' Computer</p></div>'
  var scoreTable = document.querySelector('#table')
  scoreTable.innerHTML += '<table>'+resultTable[1]+'</table>';
};
  

var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
  var modale = document.querySelectorAll('.modal')
  for(var i = 0; i < modale.length; i++){
    modale[i].classList.remove('show');
  }
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

var output = document.getElementById("output"); 
var comment = document.getElementById("comment"); 
var result = document.getElementById("result"); 
var round = document.getElementById("round"); 
var progressTable = []; 
var resultTable;
var params = {
rounds: 0,
loses: 0,
wins: 0,
games: 0,
progress: []
};

var button = document.getElementById('start-game');
button.addEventListener('click', newGame);
function newGame(){
  params.rounds = window.prompt('How many params.rounds you would like to play');
  if (!isNaN(params.rounds) && params.rounds>0){
   document.getElementById("game").style.display = "block";
   round.innerHTML = '<br> You have ' +params.rounds+' rounds.'
  } else {
    output.innerHTML = 'Input needs to be a number' + '<br><br>' 
  }
}

var moves = document.querySelectorAll('.player-move');
for (var i=0; i < moves.length; i++) {
  moves[i].addEventListener('click', user) 
};
 

function results() {
  if (params.games < params.rounds) {  
  result.innerHTML = 'You:'+params.wins+ ' - Computer:'+params.loses+'<br><br> games played: '+params.games+'.'
  }
}

function user(){
  var playerMove = this.getAttribute('data-move');

  var compMove = Math.floor(Math.random() * 3);
    if (compMove == 0)  {compMove = "rock";
    } else if(compMove == 1) {compMove = "paper";
    } else{compMove = "scissors";
    }; 
    function compare (player, comp) {
      if (player === comp){
        comment.innerHTML = 'It`s a tie!';
        resultTable = 'It`s a tie!';
      } else if (player == 'rock'){
          if (comp == 'scissors') {
          params.wins++;
          comment.innerHTML = 'You won!';
          resultTable = 'You won!'
          } else if (comp == 'paper')  {
            params.loses++;
            comment.innerHTML = 'You lost!';
            resultTable = 'You lost!'
          } 
        } else if (player == 'paper'){
          if (comp == 'rock') {
            params.wins++;
            comment.innerHTML = 'You won!';
            resultTable = 'You won!';
          } else if (comp == 'scissors')  {
            params.loses++;
            comment.innerHTML = 'You lost!';
            resultTable = 'You lost!';
          } 
        } else if (player == 'scissors'){
          if (comp == 'paper') {
            params.wins++;
            comment.innerHTML = 'You won!';
            resultTable = 'You won!';
          } else if (comp == 'rock')  {
            params.loses++;
            comment.innerHTML = 'You lost!';
            resultTable = 'You lost!';
          } 
        }
      }
       
  compare (playerMove, compMove);
  params.games = params.wins + params.loses;
  
  output.innerHTML = 'User: '+playerMove+ '<br> Computer: '+compMove + '<br><br>'; 
  result.innerHTML = 'You:'+params.wins+ ' - Computer:'+params.loses+ '<br><br> games played: '+params.games+'.';
  params.progress.push([params.games, playerMove, compMove, resultTable]);
  console.log(params.progress)
  gameOver()
}
//game over
function gameOver() {
  if (params.games == params.rounds) {
    gameOverTable(true)
    showModalOver(true);
    document.getElementById("game").style.display = "none";
  };
};

function gameOverTable() {
  for (i=0; i < params.progress.length; i++){
    var rows = params.progress[i];
    progressTable.push('<tr><th>'+rows[0]+'</th><th>'+rows[1]+'</th><th>'+rows[2]+'</th><th>'+rows[3]+'</th></tr>');
    console.log(progressTable)
  };
}
