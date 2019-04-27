var x=100;
var y=100;
function setup() {
  createCanvas(400, 400);
  var c=color(255,255,255)
  fill(c);
}

function draw() {
  if(keyIsDown(LEFT_ARROW))
  {
    x-=5
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    x+=5
  }
   if(keyIsDown(UP_ARROW))
   {
    y-=5
   }
  if(keyIsDown(DOWN_ARROW))
  {
    y+=5
  }
  clear()
  background(0);
  ellipse(x, y, 80, 80)
  rect(220, 200, 170, 300)
}