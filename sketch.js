




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
  paper = new  Paper(20,575,10);
  dustbin_piece1 = new Dustbin(600,660,200,20)
  dustbin_piece2 = new Dustbin(490,595,20,150)
  dustbin_piece3 = new Dustbin(710,595,20,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  dustbin_piece1.display();
  dustbin_piece2.display();
  dustbin_piece3.display();

  keyPressed()
}
function keyPressed(){
if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position(x=600,y=400))

 }
}