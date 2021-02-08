var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  
  
  speed = random(55,90)
  weight = random(400,1500);

  car = createSprite(50,200, 50,50);
  car.shapeColor = color(255,255,255)
  wall = createSprite(1200,200, 60,height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(0,140,200);  
  if(wall.isTouching(car)){
    car.velocityX = 0;
    var deformation=0.5 * weight * speed*speed/22500;
    if(deformation<180 && deformation>100) {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100) {
      car.shapeColor = color(0,250,0);
    }
    if(deformation>180) {
      car.shapeColor = color(255,0,0);
    }
  
  }
  drawSprites();

    }
