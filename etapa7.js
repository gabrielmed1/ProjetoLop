var x=50;
var y=200;
var vxo=[];
var vyo=[];
var v_tamanho=[];
var qtd_objetos=5;
var i;
var xd;
var yd;
var estado_Disparo = false;
var vidas=3;
var pontos=0;
var dificuldade=1;
var r1=30;
var r2=20;
var B_Pontos=10000;
function setup() {
  createCanvas(500, 500);
  for(i=0;i<qtd_objetos;i++)
  {
    vxo[i]=random(0,500);
    vyo[i]=random(0,500);
    v_tamanho[i]=random(2,40);
  }
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
  if(keyIsDown(CONTROL) && estado_Disparo==false)
  {
    xd=x;
    yd=y;
    estado_Disparo = true;
  } 
  if( estado_Disparo == true )
  {
    ellipse(xd,yd,4,4);
    xd=xd+20;
    if(xd>width)
    {
      estado_Disparo = false;
    } 
  }
  for(i=0;i<qtd_objetos;i++)
  {
    ellipse(vxo[i],vyo[i],v_tamanho[i],v_tamanho[i]);
    vxo[i]=vxo[i]-5;
    if(vxo[i]<0)
    {
      vxo[i]=500;
    }
    if(dist(x,y,vxo[i],vyo[i])<r1+v_tamanho[i])
    {
      x=50;
      y=200;
      vidas--
      if(vidas<0)
      {
        vidas=3;
      }
    }
  }
}