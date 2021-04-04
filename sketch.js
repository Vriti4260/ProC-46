var Ria, Key, Chest;
var bgGroup, bg, bg1, bg2, bg3, bg4;
var gameState;

function preload(){
bg1 = loadImage ("Images/Image1.jpg")
bg2 = loadImage ("Images/Image2.jpg")
bg3= loadImage ("Images/Image3.jpg")
bg4 = loadImage ("Images/Image4.jpg")
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(200,200,displayWidth,displayHeight);
  bg.addImage("bg1",bg1);
  bg.scale = 0.5;
  
}


function draw() {
  background(255,255,255);
  spawnBackground()
  if(gameState===0){
  
  }
  drawSprites();
}

function spawnBackground(){
  var rand = Math.round(random(1,4));
  switch(rand) {
    case 1: bg.addImage(bg1);
            break;
    case 2: bg.addImage(bg2);
            break;
    case 3: bg.addImage(bg3);
            break;
    case 4: bg.addImage(bg4);
            break;
    default: break;
  }
} 