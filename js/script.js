
var output = document.getElementById("output"); 
var comment = document.getElementById("comment"); 
var result = document.getElementById("result"); 
var round = document.getElementById("round"); 
var rounds = 0;
var button = document.getElementById('start-game');
button.addEventListener('click', newGame);
function newGame(){
  rounds = window.prompt('How many rounds you would like to play');
  if (!isNaN(rounds) && rounds>0){
   document.getElementById("game").style.display = "block";
   round.innerHTML = '<br> You have ' +rounds+' rounds.'
  } else {
    output.innerHTML = 'Input needs to be a number' + '<br><br>' 
  }
}

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

rock.addEventListener('click', user);
paper.addEventListener('click', user);
scissors.addEventListener('click', user);
var loses = 0;
var wins = 0;
var games = 0;  

function results() {
  if (games < rounds) {  
  result.innerHTML = 'You:'+wins+ ' - Computer:'+loses+'<br><br> Games played: '+games+'.'
  }
}

function user(){
  var playerMove = this.id;
  
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
         wins++;
         comment.innerHTML = 'You won!';
        } else if (comp == 'paper')  {
          loses++;
          comment.innerHTML = 'You lost!';
        } 
      } else if (player == 'paper'){
        if (comp == 'rock') {
          wins++;
         comment.innerHTML = 'You won!';
        } else if (comp == 'scissors')  {
          loses++;
          comment.innerHTML = 'You lost!';
        } 
      } else if (player == 'scissors'){
        if (comp == 'paper') {
          wins++;
          comment.innerHTML = 'You won!';
        } else if (comp == 'rock')  {
          loses++;
          comment.innerHTML = 'You lost!';
        } 
   } 
}
  compare (playerMove, compMove);
  games = wins + loses;
  
  output.innerHTML = 'User: '+playerMove+ '<br> Computer: '+compMove + '<br><br>'; 
  result.innerHTML = 'You:'+wins+ ' - Computer:'+loses+ '<br><br> Games played: '+games+'.';
  gameOver()
}
function gameOver() {
  console.log(games)
  console.log(rounds)
  if (games == rounds) {
      document.getElementById("game").style.display = "none";
      output.innerHTML = 'Game over! <br><br>Finall result: You:'+wins+ ' - Computer:'+loses; 
      comment.innerHTML = ''
      result.innerHTML = ''
  } 
};