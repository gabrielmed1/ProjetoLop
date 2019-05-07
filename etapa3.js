var x=200;
var y=200;
var xo=0;
var yo=50;
function setup() 
{
  createCanvas(400, 400);
  var c=color(255,255,255) ;
  fill(c);
}

function draw() {
  if(keyIsDown(LEFT_ARROW))
  {
    x-=5;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    x+=5;
  }
  if(keyIsDown(UP_ARROW))
  {
    y-=5;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    y+=5;
  }
  clear();
  background(0);
  rect(xo,yo,50,50);
  xo=xo+5;
  if(xo>400)
  {
    xo=-random(1000);
  }
}