//Project 30
//Viyath Wanninayake
//02/02/2021

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;
var division1
var plinko1
function preload(){
  
}

function setup() {
	createCanvas(480,800);
    frameRate(30);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
    ground1 = new ground(0,800,2000,20);
    plinko1 = new plinko(200,200,20);
    // division1 = new division(0,650,10,300);
    for (var k = 0;k<=width;k=k+80){
      divisions.push(new division(k,height - divisionHeight/2,10,divisionHeight));
    }
    for (var j = 40;j<=width;j=j+50){
      plinkos.push(new plinko(j,75,10));
    }
    for (var l = 15;l<=width;l=l+50){
      plinkos.push(new plinko(l,175,5));
    }
    for (var m = 40;m<=width;m=m+50){
      plinkos.push(new plinko(m,275,10));
    }
    for (var n = 15;n<=width;n=n+50){
      plinkos.push(new plinko(n,375,10));
    }
    
    console.log(particles);
    console.log(frameCount)
    
	Engine.run(engine);
    
}

function draw() {
  rectMode(CENTER);
  background(0);
  fill("red");
  drawSprites();
  ground1.display();
  //division1.display();
  if(frameCount%60===0){
      particles.push(new particle(random(width/2-50,width/2+50),10,10))
    }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for (var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for (var l=0;l<particles.length;l++){
    particles[l].display();
  }
}



