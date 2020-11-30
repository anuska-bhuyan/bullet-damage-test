var wall,thickness;
var bullet,speed,weight;
var lbullet,lwall;

function setup() {
  createCanvas(1600,400);
thickness=random(22,83);
speed=random(50,90);
weight=random(400,1500);

bullet=createSprite(50,200,50,50);
bullet.velocityX=speed;

wall=createSprite(900,200,thickness,height/2);
wall.shapeColor=color(80,80,80);


}

function draw() {
  background("white");  
  hascollided();

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
    

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,225,0);
    }
    

  drawSprites();
  }

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;

  }
return false;
} 