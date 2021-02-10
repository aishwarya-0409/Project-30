const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygon_img;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    polygon_img=loadImage("polygon.png");


    slingShot = new SlingShot (this.polygon, {x:100,y:200});

    ground = new Ground(650,590,1300,30);

    stand1=new Ground(390,310,270,12);

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    block16 = new Block(390,155,30,40);

    stand2 = new Ground(800,225,210,12);

    block17 = new Block(740,205,30,40);
    block18 = new Block(770,205,30,40)
    block19 = new Block(800,205,30,40)
    block20 = new Block(830,205,30,40)
    block21 = new Block(860,205,30,40);

    block22 = new Block(770,165,30,40)
    block23 = new Block(800,165,30,40)
    block24 = new Block(830,165,30,40)

    block25 = new Block(800,125,30,40);

    stand3 = new Ground(0,400,5000,30);
    
}

function draw(){
   background(56,44,44);
    Engine.update(engine);


    ground.display();
    stand1.display();
    stand2.display();
    stand3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill(135,206,234);
    strokeWeight(1.5);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill(255,192,203);
    strokeWeight(1.5);
    block13.display();
    block14.display();
    block15.display();
    fill(63,224,208);
    strokeWeight(1.5);
    block16.display();
    fill(128,128,128);
    strokeWeight(1.5);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill(135,206,234);
    strokeWeight(1.5);
    block22.display();
    block23.display();
    block24.display();
    fill(63,224,208);
    strokeWeight(1.5);
    block25.display();
    fill(255,192,203);
    strokeWeight(1.5);

    fill("white");
    textSize(24);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30)
    
    fill("gold");
    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}

function keyPressed() {
    if(keyCode===32){
  
    Matter.Body.setPosition(this.polygon, {x:100, y:200}) 
    slingShot.attach(this.polygon);
  
    }
  }