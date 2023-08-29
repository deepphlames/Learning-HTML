
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randompicture = "images/dice" + randomNumber1 + ".png";

var diceone = document.querySelectorAll("img")[0];

diceone.setAttribute("src", randompicture);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randompicture = "images/dice" + randomNumber2 + ".png";

var dicetwo = document.querySelectorAll("img")[1];

dicetwo.setAttribute("src", randompicture)

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 wins";
} 
else if(randomNumber2 > randomNumber1){
   document.querySelector("h1").textContent = "Player 2 wins";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "draw";
}