var canvas;
var music;
var b1,b2,b3,b4
var ball,edgeSprite

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);
    edgeSprite=createEdgeSprites()

    //create 4 different surfaces
b1 = createSprite(0,580,200,40)
b1.shapeColor="blue"

b2 = createSprite(200,580,200,40)
b2.shapeColor="orange"

b3 = createSprite(400,580,200,40)
b3.shapeColor="red"

b4 = createSprite(600,580,200,40)
b4.shapeColor="green"

ball=createSprite(100,100,40,40)
ball.velocityX=4
ball.velocityY=-5
ball.shapeColor ="white "
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edgeSprite); 


if(ball.isTouching(b1)){
    ball.shapeColor ="blue"
    music.play()
    ball.bounceOff(b1)
}


if(ball.isTouching(b2)){
    ball.shapeColor ="orange"
    ball.velocityX=0
    ball.velocityY=0
    music.stop()
}

if(ball.bounceOff(b3)){
    ball.shapeColor ="red"
    
}


if(ball.isTouching(b4)){
    ball.shapeColor ="green"
    ball.bounceOff(b4)
}


drawSprites()

    //add condition to check if box touching surface and make it box
}
