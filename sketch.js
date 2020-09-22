var bullet1,wall1, thickness;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  bullet1 = createSprite(50,height/2,80,10);
  bullet1.velocityX = speed;
  bullet1.shapeColor = "white";
  
  thickness = random(22,83);

  wall1 = createSprite(1200,height/2,thickness,height/2);
  wall1.shapeColor = rgb(80,80,80);
}

function draw() {
  background(0,0,0);  

  if (wall1.x - bullet1.x <= (bullet1.width/2 + wall1.width/2)) 
  {
    bullet1.velocityX = 0;

    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(deformation);

    if (deformation > 10)
    {
      wall1.shapeColor = color(255,0,0);
    } else {
      wall1.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}