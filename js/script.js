'use strict';
//modale
(function(){ 
  var modals = document.querySelectorAll('.modal');
//open modal
  
var showModal = function(event){
  var hashIndex = event.target.href.indexOf('#')
  var modalId = event.target.href.substring(hashIndex)
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.add('show');
  document.querySelector(modalId).classList.add('show');
  var endResult = document.querySelector('#modal-one');
  endResult.innerHTML = '<header>GAME OVER</header>  <div class="content"> <p>Finall result: You:'+params.wins+ ' - Computer:'+params.loses+'</p> </div>'
};
 
  
var modalLinks = document.querySelectorAll('.show-modal');

for(var i = 0; i < modalLinks.length; i++){
  modalLinks[i].addEventListener('click', showModal);
  }

// hide modal	
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

})(); 

var output = document.getElementById("output"); 
var comment = document.getElementById("comment"); 
var result = document.getElementById("result"); 
var round = document.getElementById("round"); 
var params = {
rounds: 0,
loses: 0,
wins: 0,
games: 0
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
      } else if (player == 'rock'){
          if (comp == 'scissors') {
          params.wins++;
          comment.innerHTML = 'You won!';
          } else if (comp == 'paper')  {
            params.loses++;
            comment.innerHTML = 'You lost!';
          } 
        } else if (player == 'paper'){
          if (comp == 'rock') {
            params.wins++;
            comment.innerHTML = 'You won!';
          } else if (comp == 'scissors')  {
            params.loses++;
            comment.innerHTML = 'You lost!';
          } 
        } else if (player == 'scissors'){
          if (comp == 'paper') {
            params.wins++;
            comment.innerHTML = 'You won!';
          } else if (comp == 'rock')  {
            params.loses++;
            comment.innerHTML = 'You lost!';
          } 
        }
      }
       
  compare (playerMove, compMove);
  params.games = params.wins + params.loses;
  
  output.innerHTML = 'User: '+playerMove+ '<br> Computer: '+compMove + '<br><br>'; 
  result.innerHTML = 'You:'+params.wins+ ' - Computer:'+params.loses+ '<br><br> games played: '+params.games+'.';
  gameOver()
}
//game over
function gameOver() {
  console.log(params.games)
  console.log(params.rounds)
  if (params.games == params.rounds) {
      document.getElementById("game").style.display = "none";
      output.innerHTML = 'Game over! <br><br>Finall result: You:'+params.wins+ ' - Computer:'+params.loses; 
      comment.innerHTML = ''
      result.innerHTML = ''
  } 
};