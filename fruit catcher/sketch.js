let ground;
let spaceship_img;
var spaceship;
var bg_img;
var asteroid_img
var Astscore=0;
var gamestate=1;

var vx = 0;
var g = 0.05;
var vy = 0;
var astGroup;
function preload()
{
  spaceship_img = loadImage("images/spaceship.png");
  bg_img = loadImage("images/background.jpg");
  asteroid_img= loadImage("images/asteroid.png");
  fire_Img=loadImage("images/fireball.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  spaceship = createSprite(100,50,30,30);
  spaceship.addImage(spaceship_img);
  spaceship.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
  astGroup=new Group()
}

function draw() 
{
  background(51);
  image(bg_img,0,0,windowWidth,windowHeight);
  push()
  fill(255);
 // text("Vertical Velocity: "+round(vy),800,75);
  pop();


if(gamestate===1){
  if(keyDown("UP_ARROW")){
    spaceship.y=spaceship.y-10
  
    }
  
    if(keyDown("DOWN_ARROW")){
      spaceship.y=spaceship.y+10
    
      }
      if(keyDown("LEFT_ARROW")){
        spaceship.x=spaceship.x-10
      
        }
        if(keyDown("RIGHT_ARROW")){
          spaceship.x=spaceship.x+10
        
          }
          spawnAstroid();
        if(keyWentUp('f')){
          spawnFire();
        }
          
}
  
    if(astGroup.isTouching(spaceship)){
      gamestate=0;
      spaceship.x=windowWidth/2
      spaceship.y=windowHeight/2

    }        

  //fall down
  //vy +=g;
  
  //spaceship.position.y+=vy;
  drawSprites();
  fill('white');
  textSize(23);
  text("Asteroid Score: "+Astscore,40,40);
}

function spawnAstroid(){
var randframes=Math.round(random(60,100))
if(frameCount%randframes==0){
  var as=createSprite(random(50,windowWidth-50),random(50,windowHeight-50))
  as.addImage(asteroid_img);
  var randSize=random(0.05,0.2)
  as.scale=randSize;
  if(as.x>windowWidth/2){
    as.velocityX=-3;
  }
  else{
    as.velocityX=3;
  }
  if(as.y>windowHeight/2){
    as.velocityY=-2;
  }
  else{
    as.velocityY=2;
  }
  as.lifetime=300;
  astGroup.add(as)
}


}

function spawnFire(){
  var fire=createSprite(spaceship.x,spaceship.y);
  fire.velocityY=-3;
  fire.addImage(fire_Img)
  fire.scale=0.1
}
