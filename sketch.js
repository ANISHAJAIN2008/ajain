const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

	paper1 = new Paper(40,50,20);
	//Create the Bodies Here.

	log1 = new Log(700,320,70,70);
    log2 = new Log(920,320,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground.display();
  log1.display();
  log2.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:80});
}}

