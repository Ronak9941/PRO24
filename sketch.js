
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone,stone2,stone3,stone4,stone5;
var ground;
var rubber;
var iron;
var soil;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(400,350);
	stone = new Stone(550,570,50,50);
	ground = new Ground(400,height,8000,20);
	rubber = new Rubber(600,640);
	iron = new Iron(150,620,70,50)
	soil = new Soil();

	for(i = 0;i < 100;i++){
		soil[i]= new Soil();
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  hammer.display();
  stone.display(); 
 ground.display();
 rubber.display();
 iron.display();
 soil.display();
 for(i = 0;i < 100;i++){
	soil[i].display();
}
}



