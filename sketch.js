let fr = 10;
function setup() {
  createCanvas(450, 450);
  background(245,101,94);
  noStroke();
  frameRate(fr);

}

function draw() {


  var size=random(25,100);
  var x=random(width);
  var y=random(height);
  
  for (var ring =size; ring>=0;ring-=random(2,10)){
    fill(random(100),random(50,200),random(100,256));
    rect(x,y,ring,ring); 
  }
  
if (mouseIsPressed){
  background(255,239,158);
    for (var ring =size; ring>=0;ring-=random(2,10)){
    fill(random(100,270),random(120,250),random(180,200));
    circle(x,y,ring,ring);
  }
}

  fill(245,101,94);
  rectMode(CENTER);
  rect(mouseX,mouseY,80,80);
  
     
}