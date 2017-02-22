/*
Original code by Daniel Shiffman: https://vimeo.com/channels/learningp5js/138935676
Modified by Lisa Louison 2.21.17*/

//creating a square canvas
function setup() {
  createCanvas(600,600);
}

function draw() {
//Setting the background to grey
  background(100);

//Giving the circle a white stroke and stokeweight of 2 with an initial black fill   
  stroke(255);
  strokeWeight(2);
  fill(0);
  
//Creating a conditional statement that changes the backgound and circle fill based on x location of the mouse
  if (mouseX > 300) {
    fill(random(255));
    background(25,15,100)
  }

//Creating a 100 diameter circle in the center of the canvas
  ellipse(300, 300, 100, 100);
  rect(300, 300, 100, 100)
}