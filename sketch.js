const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var box1,box2,box3;
var ball1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590,1200,20);    
    box1 = new Box(155,500,180,70);
    box2 = new Box(155,550,200,70);
    box3 = new Box(250,440,100,30);
    ball = new CanonBall(200,400,100);
}

function draw(){
    background("lightblue");
    arc(155,475,175,175,600,false);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    ball.display();
    fill(255);
}

function keyReleased() {
    // Call the shoot method for the cannon.
}
