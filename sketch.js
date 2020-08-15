
var Monkeys;
var bananas,jungle;
var bananaGroup,stoneGroup;
var ground;
var score,score2;

function preload(){
    Monkeys = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananas = loadImage("banana.png");
  stones = loadImage("stone.png");
  jungle = loadImage("jungle.png");
  
}

function setup() {
  createCanvas(400, 400);

  
  Monkey = createSprite(200,200,400,400);
  Monkey.addAnimation("running", Monkeys);
  bananaGroup = new Group();
  stoneGroup = new Group();
  jungle = createSprite(200,180,400,20);
  jungle.addImage("jungle",jungle);
  jungle.x = jungle.width /2;
  jungle.velocityX = -2;
  score = 0;
  score2 = 0;
  
  ground = createSprite(200,190,400,10);
  ground.visible = false;
}

function draw() {
  background("white");
  if(keyDown("space")&& (Monkey.y >= 161) ){
    Monkey.velocityY = -10;
  }
  
  Monkey.velocityY = Monkey.velocityY + 0.8
  
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  score=Math.round(score+frameRate()/60);
  
  
  if (Monkey.collide(bananas)){
      score2=score2+1;
      }
  Monkey.collide(ground);
  
  if (Monkey.touching(bananas)){
      Monkey.scale=Monkey.scale+0.25
      }
  
  if (Monkey.touching(stones)){
      Monkey.scale=Monkey.scale-0.25
      }
  spawnBananas();
  spawnStones();
  drawSprites();
  text("Bananas: "+score2,250,80);
  text("Score: "+score,250,50);
}

function spawnBananas() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = random(80,120);
    banana.addImage("banana",bananas);
    banana.scale = 0.6;
    banana.velocityX = -3;
    

    banana.lifetime = 230;
  }
  
}

function spawnStones() {
  if (frameCount % 60 === 0) {
    var stone = createSprite(600,120,40,10);
    stone.y = random(80,120);
    stone.addImage("stone",stones);
    stone.scale = 0.6;
    stone.velocityX = -3;
    

    stone.lifetime = 230;
  }
  
}