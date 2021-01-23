
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var BD;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof1=new roof(width/2,height/4,width/7,20);

	BD=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new bob(startBobPositionX-BD*2,startBobPositionY,BD);
	bob2=new bob(startBobPositionX-BD,startBobPositionY,BD);
	bob3=new bob(startBobPositionX,startBobPositionY,BD);
	bob4=new bob(startBobPositionX+BD,startBobPositionY,BD);
	bob5=new bob(startBobPositionX+BD*2,startBobPositionY,BD);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	rope1=new rope(bob1.body,roof1.body,-BD*2, 0)
	rope2=new rope(bob2.body,roof1.body,-BD*1, 0)
	rope3=new rope(bob3.body,roof1.body,0, 0)
	rope4=new rope(bob4.body,roof1.body,BD*1, 0)
	rope5=new rope(bob5.body,roof1.body,BD*2, 0)

	/*constraint1={
		bodyA:bob1.body,
		bodyB:roof1.body,
		pointB: {x:-BD*2, y:0}
	}

	constraint2={
		bodyA:bob2.body,
		bodyB:roof1.body,		
		pointB: {x:-BD, y:0}
	}


	constraint3={
		bodyA:bob3.body,
		bodyB:roof1.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bob4.body,
		bodyB:roof1.body,		
		pointB: {x:BD, y:0}	

	}

	constraint5={
		bodyA:bob5.body,
		bodyB:roof1.body,		
		pointB: {x:BD*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  fill("purple")
  roof1.display();

  fill("blue")
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	

  fill("red")
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}






