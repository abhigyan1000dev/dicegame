var randomVariable1=Math.random();
randomVariable1=randomVariable1*6;
var Final1=Math.floor(randomVariable1)+1;

var randomDiceimage1="dice"+Final1+".png"; // dice1.png
var randomImageSource1="images/"+ randomDiceimage1;  //images/dice2.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);



var randomVariable2=Math.random();
randomVariable2=randomVariable2*6;
var Final2=Math.floor(randomVariable2)+1;

var randomDiceimage2="dice"+Final2+".png"; // dice1.png
var randomImageSource2="images/"+ randomDiceimage2;  //images/dice2.png

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(Final1>Final2)
{
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(Final2>Final1)
{
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else
{
  document.querySelector("h1").innerHTML="DRAW";
}
