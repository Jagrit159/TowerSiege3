const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,stand1;
var score;

function preload(){
    bg = color("black");
  txtcolor = color("black");
  fetchtime();
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    score=0;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500,400,400,15);
    stand2 = new Ground(900,300,400,15);

    box1 = new Box(350,300,40,60);
  box2 = new Box(390,300,40,60);
  box3 = new Box(420,300,40,60);
  box4 = new Box(460,300,40,60);
  box5 = new Box(500,300,40,60);
  box6 = new Box(540,300,40,60);
  box7 = new Box(365,250,40,60);
  box8 = new Box(405,250,40,60);
  box9 = new Box(445,250,40,60);
  box10 = new Box(485,250,40,60);
  box11 = new Box(525,250,40,60);
  box12 = new Box(385,150,40,60);
  box13 = new Box(425,150,40,60);
  box14 = new Box(465,150,40,60);
  box15 = new Box(445,100,40,60);
  box16 = new Box(405,100,40,60);
  box17 = new Box(780,130,40,60);
  box18 = new Box(820,130,40,60);
  box19 = new Box(740,130,40,60);
  box20 = new Box(760,80,40,60);
  box21 = new Box(800,80,40,60);

  bomb = new Bomb(100,100,40,40);
    

    slingshot = new SlingShot(bomb.body, {x:200, y:100});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    stand1.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    bomb.display();
    slingshot.display();  
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
      

    fill(100);
    text("Drag the ball and release to destroy the tower and seige it! SPACE TO TRY AGAIN.",500,100);
    text("SCORE :"+score,50,50)
}

function mouseDragged(){
    Matter.Body.setPosition(bomb.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.bomb.body)
    }
}

async function fetchtime()
{
    var time = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data = await time.json();
    console.log(data);
    var hour = data.datetime.slice(11,13);
    if(hour>=6 && hour<=18)
    {
      bg=color("azure");
      txtcolor=color("black")
    }
    else{
       bg = color("black")
       txtcolor = color("white")
    }
}
