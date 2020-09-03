var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


var plinkos = [];
var divisions = [];

var turn = 0;
var gameState = "start";
var particle = null;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(35)
  text("500",90,540)
  text("500",10,540)
  text("500",170,540)
  text("500",250,540)
  text("100",330,540)
  text("100",410,540)
  text("100",490,540)
  text("200",570,540)
  text("200",650,540)
  text("200",730,540)


  
  
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(gameState === "end"){
     textSize(100)
     text("Game Over",100,250)
   }
   
 
  if(particle !== null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 300){
        score = score+500
        particle = null;
        if(turn >= 5){
          gameState = "end"
        }
      }
     else if(particle.body.position.x < 500){
        score = score+100
        particle = null;
        if(turn >= 5){
          gameState = "end"
        }
      }
      else if(particle.body.position.x < 800){
        score = score+200
        particle = null;
        if(turn >= 5){
          gameState = "end"
        }
      }
    }
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

  if(gameState !== "end"){
    turn = turn+1;
    particle = new Particle(mouseX,10,10)
  }
  

}