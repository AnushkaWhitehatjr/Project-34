
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

var roof1, bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var canvasmouse, Mouse, mConstraint;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraont.create(engine, options);
	World.add(world, mConstraint)

	roof1 = new roof(600,150,550,50);
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObj1=new bob(startBobPositionX-bobDiameter*2,600,bobDiameter);
	bobObj2=new bob(startBobPositionX-bobDiameter,600,bobDiameter);
	bobObj3=new bob(startBobPositionX,600,bobDiameter);
	bobObj4=new bob(startBobPositionX+bobDiameter,600,bobDiameter);
	bobObj5=new bob(startBobPositionX+bobDiameter*2,600,bobDiameter);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope1=new rope(bobObj1.body,roof1.body,-bobDiameter*2, 0);
	rope2=new rope(bobObj2.body,roof1.body,-bobDiameter*1, 0);
	rope3=new rope(bobObj3.body,roof1.body,0, 0);
	rope4=new rope(bobObj4.body,roof1.body,bobDiameter*1, 0);
	rope5=new rope(bobObj5.body,roof1.body,bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  drawSprites();
  mouseDragged();
 
}

function mouseDragged() {
	  Matter.Body.setPosition(bobObj1.body,bobObj1.body.position,{x:-50,y:-45});
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
