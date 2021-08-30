var bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
//const Engine = Matter.Engine
//World = Matter.World
 //Bodies = Matter.Bodies
 //Body = Matter.Body
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    mouseImg1=loadImage("images/mouse1.png");
    catImg2=loadAnimmation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimmation("images/mouse2.png","images/mouse3.png");
    //mouseImg3=loadImage("images/mouse4.png");
    //mouseImg3=loadImage("images/cat4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(750,600);
    cat.addImage(catImg1);    
    cat.scale=0.2;
  // cat.loadAnimmation("aticat", catImg2);
//cat.addAnimation("aticat",catImg2)

   mouse=createSprite(200,600);
    mouse.addImage(mouseImg1);
    mouse.scale=0.15;   

}

function draw() {

    background(bgImg);
   catImg1=loadImage("images/cat4.png");
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
 //if(cat.x - mouse.x === (mouse.width - cat.width)/2){
   //Matter.Body.setStatic(cat, false) ;
   
   cat.x = 250;
   
  cat.addAnimation("cat running",catImg2);
  cat.changeAnimation("cat running");
//mouseImg1 = loadImage("images/mouse4");
//cat.addImage(catImg3);
   //cat.addImage = loadImage("images/cat4.png"); 
    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === RIGHT_ARROW) {
     mouse.addAnimation("mouseTeasing", mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
    // mouse.x= mouse.x + 20;
  }
  if (keyCode === LEFT_ARROW) {
     // cat. addAnimation("images/cat2.png","images/cat3.png")
   //cat.addAnimation("catRunning", catImg2);
   //cat.changeAnimation("catRunning");
      cat.frameDelay = 25;
       cat.x = cat.x - 20;
    }

}
