
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground; 
var tree,treeIMG;
var boy,boyIMG;
var stone,stoneIMG
var mango1,mango2,mango3,mango4,mango5
var launcher

function preload(){
	treeIMG=loadImage("Sprite/tree.png");
	boyIMG=loadImage("Sprite/boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,600,width,20);
  
  stone=new Stone(235,420,30);
  
	mango1=new Mango(790,230,30);
	mango2=new Mango(920,230,40);
	mango3=new Mango(890,200,40);
	mango4=new Mango(850,190,30);
  mango5=new Mango(710,320,30);
  
  launcher=new Launcher(stone.body,{x:235,y:420})
  
 
	
	tree=createSprite(775,368);
  tree.addImage(treeIMG)
  tree.scale=0.42;

	boy=createSprite(160,550);
  boy.addImage(boyIMG);
	boy.scale=-0.125;


	Engine.run(engine);
  
}
 

function draw() {
  rectMode(CENTER);
  background("white");
  
  fill("black");
  textSize(15);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();

  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased() { 
  launcher.fly(); 

}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r)
{
  Matter.Body.setStatic(mango.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher.attach(stone.body)
  }

}




