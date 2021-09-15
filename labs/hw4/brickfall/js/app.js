//for storing brick positions 
let brickXY = [];

function setup(){
    createCanvas(400, 400);
}

//draws a brick where the mouse clicks and has it move downward until it reaches the bottom of the canvas
function draw(){
    background("pink");
    fill("white");
    for (let i = 0; i < brickXY.length; i++) {
        fill(brickXY[i][2]);
        rect(brickXY[i][0], brickXY[i][1], 40, 20);
        brickXY[i][1] +=5;
    }

}

//when mouse is pressed, draws a brick at the position of the mouse with the color white
function mousePressed(){
    brickXY.push([mouseX, mouseY, "white"])

}