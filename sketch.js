
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject; 
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj=new dustbin(1200,650);
	 paperObject=new paper(200,450,40);
	  groundObject=new ground(width/2,670,width,20);
	   //Create a Ground
	    var render = Render.create({
			 element: document.body, engine: engine, options: {
				  width: 1200, height: 700, wireframes: false 
				}
				 }
				 );


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //drawSprites();
  dustbinObj.display();
   paperObject.display();
	groundObject.display();
	

}
function keyPressed() {
	 if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
 }
 }


