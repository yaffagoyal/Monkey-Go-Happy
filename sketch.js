//Global Variables
var player_runningimg, monkey, banana, bananaImage,obstacle,        obstacleImage, obstacleGroup, ground;
var backImage, score;
var bananaGroup;
var obstacleGroup;


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running=loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",);
  
  bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  
  backGround=createSprite(400,0,200,200);
  backGround.addImage(backImage);
  backGround.velocityX=-4;
  backGround.scale=1.2;
 
  
  ground=createSprite(300,280,600,20);
  ground.visible=false;
  
  monkey=createSprite(50,240,30,40);
  monkey.addAnimation("running",player_running);
  monkey.scale=0.15;
  
  score=0;
  
  bananaGroup= new Group();
  obstacleGroup= new Group();   
}


function draw(){
 background(255);
   if (backGround.x < 0){
    backGround.x = backGround.width/2; 
  }
  
 
      //console.log(monkey.y);
  
  if(keyDown("space")&&monkey.y>=224){ 
    monkey.velocityY=-14;
  }
     monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
     
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2
  }  
  switch(score){
    case 10: monkey.scale=0.12;
        break;
    case 20: monkey.scale=0.14;
        break;
    case 30: monkey.scale=0.16;
        break;
    case 40: monkey.scale=0.18;
        break;
     default:break; 
      
  }
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
    spawnBananas();
  
    spawnObstacles();
  
  
 

  
  
 

  
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white"); 
  text("Score:  "+score,500,50);
  
}

function spawnBananas(){
  if(frameCount%80===0){
    var banana= createSprite(600,120,40,10);
    banana.addImage(bananaImage);
    banana.scale=0.05; 
    banana.y=Math.round(random(80,150));
    banana.velocityX=-6;
    banana.lifetime=-1;
    bananaGroup.add(banana);
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    var obstacle=createSprite(400,250,40,30);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX= -6;
    obstacle.scale=0.2;    
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
}
