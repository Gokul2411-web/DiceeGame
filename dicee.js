var randomNum1=Math.floor(Math.random()*6)+1;
var randomDiceeImg1="images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceeImg1);

var randomNum2=Math.floor(Math.random()*6)+1;
var randomDiceeImg2="images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceeImg2);

if(randomNum1===randomNum2){
  document.querySelector("h1").innerHTML="DRAW!";
}
else if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML="🚩PLAYER 1 WINS!";
}
else if(randomNum1 < randomNum2){
  document.querySelector("h1").innerHTML="🚩PLAYER 2 WINS!";
}
