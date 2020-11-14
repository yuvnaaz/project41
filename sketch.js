var hour;
var minute;
var second;

hr = hour();
mn = minute();
sc = second();
angleMode(DEGREES);



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  

  scAngel = map(sc, 0, 60, 0, 360);
  mnAngel = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0 , 60, 0,360);



  stroke(225,0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  translate();
  drawSprites();
}