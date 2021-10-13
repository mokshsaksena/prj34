const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5, box6, box7,box8, box9, box10, box11,box12,box13, box14, box15;
var hero,monster,rope,ground

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);

  
  rope = new Rope(hero.body, { x: 500, y: 50 });

  monster = new Monster(1100,598,300);

  box1 = new Box(600, 550, 80, 80);
  box2 = new Box(640, 550, 80, 80);
  box3 = new Box(680, 550, 80, 80);
  box4 = new Box(720, 550, 80, 80);
  box5 = new Box(760, 550, 80, 80);
  box6 = new Box(620, 510, 80, 80);
  box7 = new Box(660, 510, 80, 80);
  box8 = new Box(700, 510, 80, 80);
  box9 = new Box(740, 510, 80, 80);
  box10 = new Box(780, 470, 80, 80);
  box11 = new Box(600, 470, 80, 80);
  box12 = new Box(640, 470, 80, 80);
  box13 = new Box(680, 470, 80, 80);
  box14 = new Box(720, 470, 80, 80);
  box15 = new Box(760, 470, 80, 80);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

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

  
  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
  }
