var sea,ship;
var seaImg,shipImg;
var obstacle,obstacleIMG
var obsGroup

function preload(){
  seaImg = loadImage("bg.png");
 shipImg1=loadAnimation("shark.png")

obstacleIMG=loadImage("obstacle.png")
}

function setup(){
  createCanvas(1000,300);
  background("blue");

  // Moving background
  sea=createSprite(500,200);
  sea.addImage(seaImg);
  sea.scale=2

  
  ship = createSprite(130,235,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.15;
  sea.velocityX = -3;
  obsGroup= createGroup();

  invisibleGround = createSprite(500,290,1000,10);
  invisibleGround.visible = false;
  
  ship.debug=true;
}

function draw() {
  background(0);
  if(sea.x<0){
    sea.x=sea.width/2
  }

  

  
  if(keyDown("space")) {
  ship.velocityY=-12
   console.log("working");    
}
ship.collide(invisibleGround);
ship.velocityY = ship.velocityY + 0.8
  spawnObstacles()
if(obsGroup.isTouching(ship)){
  sea.velocityX=0;
  obsGroup.destroyEach();
  sea.velocityX = 0;
  obsGroup.setLifetimeEach(-1);

   
   obsGroup.setVelocityXEach(0);
   

}
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 100 === 0) {
     obstacle = createSprite(600,230,40,10);
    obstacle.addImage(obstacleIMG);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 134;
    

    obsGroup.add(obstacle);
   obstacle.lifetime=140
  
   }
}
