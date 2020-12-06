var ground, background, bgImg;
var monkey, monkey_running, obstacle, obstacleImg, banana, bananaImg;
var foodGroup, bananaGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  bgImg = loadImage("jungle.png");
  
  monkey_running = loadAnimation("monkey_0.png", "monkey_1.png", "monkey_2.png", "monkey_3.png", "monkey_4.png", "monkey_5.png", "monkey_6.png", "monkey_7.png", "monkey_8.png");
  
 bananaImg = loadImage("banana.png");
 obstacleImg = loadImage("obstacle.png");
}


function setup(){
  createCanvas(400, 400);
  
  background = createSprite(200, 160, 400, 400);
  background.addImage("background", bgImg);
  
  ground = createSprite(200, 380, 400, 30);
  ground.visible = false;
  ground.velocityX = -4;
  
  monkey = createSprite(150, 350, 10, 10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.15;
  
 bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw(){
  //background("skyBlue");
  
  if(keyDown("space")&& monkey.y >= 318) {
        monkey.velocityY = -12;
    }

    monkey.velocityY = monkey.velocityY + 0.5
    monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
  
  stroke("white");
  textSize = 20;
  fill("white");
  text("Score: " + score, 500, 50);
  
  stroke("black");
  textSize = 20;
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime: " + survivalTime, 100, 50);
  
  function spawnBananas(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(200,120,40,10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImg);
    banana.scale = 0.09;
    banana.velocityX = -4;
    banana.lifetime = 100;
    monkey.depth = banana.depth + 1;
    bananaGroup.add(banana);
}
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.addImage(obstacleImg);
    obstacle.velocityX = -6;
    obstacle.scale = 0.15;    
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}
}


