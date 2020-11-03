const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine, myWorld;
var object;
function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.World;
  object=Bodies.rectangle(200,100,50,50);
  World.add(myWorld.object);
 // createSprite(400, 200, 50, 50);
Engine.update
}

function draw() {
  background(255,255,200);
  rectMode(CENTER);
  rect(200, 200, 50, 50);  
  //drawSprites();
}