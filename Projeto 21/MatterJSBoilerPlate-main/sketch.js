
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth-100, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={isStatitic:false, restitution:0.3, friction:0, density:1.2}
	ball = Bodies.circle(200,10,20,ball_options);
	World.add(world, ball);

    fill("yellow");
	groundObj =new Ground((windowWidth-100)/2,480,windowWidth,15);
	leftSide =new Ground(700,423,15,100);
	rightSide =new Ground(900,423,15,100);

	rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
  background(0);
  
  ellipse(ball.position.x,ball.position.y,10);
  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);
  
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
	}
}



