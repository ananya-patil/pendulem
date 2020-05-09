
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bar,string,ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ball = Bodies.circle(mouseX,mouseY,30);
   fill("aqua");
  World.add(world,ball);
  bar = new Bar(350,220,70,30);
  string = new String(bar.body ,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  string.display();
  ellipse(ball.position.x,ball.position.y,30,30);
  bar.display();

 
}