var x=100;
var y=100;
var xo=0;
var yo=50;
var xd;
var yd;
var estado_Disparo = false;
function setup() {
  createCanvas(400, 400);
  var c=color(255,255,255);
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
  ellipse(x, y, 50, 50);
  rect(xo, yo, 80, 80);
  xo=xo-5;
  if(xo<0)
  {
    xo=+random(2000);
  }
  if(keyIsDown(CONTROL) && estado_Disparo==false)
  {
    xd=x;
    yd=y;
    estado_Disparo = true;
  } 
  if( estado_Disparo == true )
  {
    ellipse(xd,yd,4,4);
    xd=xd+10;
    if(xd>width)
    {
      estado_Disparo = false;
    }
  }
}