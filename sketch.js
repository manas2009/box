var canvas;
var music;
var  wall1, wall2, wall3, wall4;
var box;
var line1,line2,line3;
function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(400,400);
    wall1= createSprite (375,400,100,25);   
    wall1.shapeColor = "green";
    wall2 = createSprite (250,400,100,25);
    wall2.shapeColor = "red";
    wall3 = createSprite (135,400,100,25);
    wall3.shapeColor = "orange";
    wall4 = createSprite (20,400,100,25);
    wall4.shapeColor = "white"; 
    box = createSprite(200,200,25,25);
    box.velocityY = -5;
    box.velocityX  = 5;
    line1 = createSprite (200,-2,400,25);
    line1.shapeColor = "white"; 
    line2 = createSprite (420,185,25,400);
    line2.shapeColor = "white"; 
    line3 = createSprite (-14,180,25,400);
    line3.shapeColor = "white"; 
}

function draw() {
    background(rgb(169,169,169));
    background("black");
    box.bounceOff (line1);
    box.bounceOff (line2);
    box.bounceOff (line3);
    if (wall1.isTouching(box) && box.bounceOff (wall1)){
        box.shapeColor = "green";
    }
    if (wall2.isTouching(box) && box.bounceOff (wall2)){
        box.shapeColor = "red";
    }
    if (wall3.isTouching(box) && box.bounceOff (wall3)){
        box.shapeColor = "orange";
    }
    if (wall4.isTouching(box) && box.bounceOff (wall4)){
        box.shapeColor = "white";
    }
    if (box.isTouching(wall4)){
        music.play();
    }
    drawSprites();
}

