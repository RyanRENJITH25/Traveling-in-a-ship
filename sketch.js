var sea, seaImage
var Ship, ShipImage



function preload(){
seaImage = loadImage("sea.png");
ShipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200);
  sea.addImage("sea",seaImage);
  sea.scale=0.3
  sea.velocityX=-5


  Ship = createSprite(130,200,30,30);
  Ship.addAnimation("Ship",ShipImage);
  Ship.scale=0.25

}

function draw() {
  background("blue");
  sea.velocityX=-3
 if (sea.x <0){
   sea.x = sea.width/8;
 }
  drawSprites();
}