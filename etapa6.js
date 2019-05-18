var x=50;
var y=200;
var xo=0;
var yo=200;
var xd;
var yd;
var estado_Disparo = false;
var vidas=3;
var pontos=0;
var dificuldade=1;
var r1=30;
var r2=50;
function setup() {
  createCanvas(500, 500);
  var c=color(255,255,255);
  fill(c)
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
  textSize(16);
  text("Vidas: "+vidas,10,20);
  text("Pontuação: "+pontos,180,20);
  text("Dificuldade: "+dificuldade,400,20);
  ellipse(x, y,2*r1 ,2*r1 );
  ellipse(xo, yo, 2*r2,2*r2 );
  xo=xo-5;
  if(xo<0)
  {
    xo=+random(500);
    yo=+random(300);
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
  if(dist(x,y,xo,yo)<r1+r2)
  {
    x=50;
    y=200;
    vidas=vidas-1;
    if(vidas<0)
    {
      vidas=3
    }
    
  }
}