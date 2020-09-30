var zen, wall;
var speed, weight;
var fiat,brio;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,900);

 zen = createSprite(50, 50, 50, 50);
 zen.shapeColor = "green";
 zen.debug = true;

 fiat = createSprite(50, 150, 50, 50);
 fiat.shapeColor = "red";
 fiat.debug = true;

brio = createSprite(50, 250, 50, 50);
 brio.shapeColor = "orange";
 brio.debug = true;


 wall = createSprite(1500, 200, 60, 1000);
 wall.shapeColor = "blue";
 wall.debug = true;

 wall.velocityX = 0;
 zen.velocityX = speed;

 fiat.velocityX = speed;

 brio.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if (wall.x -zen.x <zen.width/2 +wall.width/2
    &&zen.x -wall.x <zen.width/2 +wall.width/2) {
 wall.velocityX =wall.velocityX * (-1);
 zen.velocityX =zen.velocityX * (0);
 zen.shapeColor= "red";
}
if (wall.y -zen.y <zen.height/2 +wall.height/2
  &&zen.y -wall.y <zen.height/2 +wall.height/2){
 wall.velocityY =wall.velocityY * (-1);
 zen.velocityY =zen.velocityY * (0);
}

if (wall.x -fiat.x <fiat.width/2 +wall.width/2
  &&fiat.x -wall.x <fiat.width/2 +wall.width/2) {
wall.velocityX =wall.velocityX * (-1);
fiat.velocityX =fiat.velocityX * (0);
fiat.shapeColor= "pink";
}
if (wall.y -fiat.y <fiat.height/2 +wall.height/2
&&fiat.y -wall.y <fiat.height/2 +wall.height/2){
wall.velocityY =wall.velocityY * (-1);
fiat.velocityY =fiat.velocityY * (0);
}

if (wall.x -brio.x <brio.width/2 +wall.width/2
  &&brio.x -wall.x <brio.width/2 +wall.width/2) {
wall.velocityX =wall.velocityX * (-1);
brio.velocityX =brio.velocityX * (0);
brio.shapeColor= "yellow";
}
if (wall.y -brio.y <brio.height/2 +wall.height/2
&&brio.y -wall.y <brio.height/2 +wall.height/2){
wall.velocityY =wall.velocityY * (-1);
brio.velocityY =brio.velocityY * (0);
}


if(wall.x-zen.x < (zen.width+wall.width)/2)
{
 zen.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
   zen.shapeColor=color(230,230,0);
  }
    if(deformation<180 && deformation>100)
    {
     zen.shapeColor=color(230,230,0); 
    }

    if(deformation<100)
    {
     zen.shapeColor=color(0,255,0);  
    }
  }

  if(wall.x-fiat.x < (fiat.width+wall.width)/2)
  {
   fiat.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
     fiat.shapeColor=color(230,230,0);
    }
      if(deformation<180 && deformation>100)
      {
      fiat.shapeColor=color(230,230,0); 
      }
  
      if(deformation<100)
      {
       fiat.shapeColor=color(0,255,0);  
      }
    }

    if(wall.x-brio.x < (brio.width+wall.width)/2)
    {
     brio.velocityX=0;
      var deformation=0.5 * weight * speed * speed/22509;
      if(deformation>180)
      {
      brio.shapeColor=color(230,230,0);
      }
        if(deformation<180 && deformation>100)
        {
        brio.shapeColor=color(230,230,0); 
        }
    
        if(deformation<100)
        {
         brio.shapeColor=color(0,255,0);  
        }
      }
  

  drawSprites();
}

