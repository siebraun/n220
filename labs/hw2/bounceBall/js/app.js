//set balls speed
let xSpeed = 5;
let ySpeed = 5;

//set starting place
let x=40;
let y=200;

//set 1/2 of radius
let r=30

//setup
function setup(){
    createCanvas(800,600);
}

//draws and animates ball
function draw(){
    background("pink");
    ellipse(x, y, r*2, r*2);
    x+= xSpeed;
    y+= ySpeed;

    if(x > width - r || x<r) {
        xSpeed = -xSpeed;
    }

    if(y > height - r || y<r){
        ySpeed = -ySpeed;
    }
}