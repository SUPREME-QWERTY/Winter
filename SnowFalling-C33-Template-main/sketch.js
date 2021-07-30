const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var snow_back;
var flake;

function preload() {

  snow_back = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  flake = new Snow(200,200);
}



function draw() {
  background(snow_back); 

  Engine.update(engine);

  flake.display();

  drawSprites();
}