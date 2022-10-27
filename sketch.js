var bg,bgImg
function preload(){

  bgImg=loadImage("snow1.jpg")
}





function setup() {
  createCanvas(1600,800);
 bg= createSprite(800, 400, 50, 50);
bg.addImage(bgImg)
bg.scale=4
}

function draw() {
  background(255,255,255);  
  drawSprites();
}