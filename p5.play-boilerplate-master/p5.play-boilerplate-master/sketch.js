var moving;
var fix

function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 200, 50, 50);
  moving=createSprite(200,200,20,20)
moving.shapeColor="green"
fix.shapeColor="green"

}

function draw() {
  background(255,255,255);  
  drawSprites();
moving.x=mouseX
moving.y=mouseY

if(moving.x-fix.x<moving.width/2+ fix.width/2 
  && fix.x-moving.x< fix.width/2 + moving.width/2 ){
moving.shapeColor="red"
fix.shapeColor="blue"

}

if(moving.y-fix.y<moving.lenght/2+ fix.lenght/2
  && fix.y-moving.y<fix.lenght/2+ moving.lenght/2 
  ){
    moving.shapeColor="red"
    fix.shapeColor="blue"

  }







}