//set radius
let r=200;
let x= -r;

//set speed
let speed=5;

//setup
function setup(){
    createCanvas(800, 600);
}

//draw and animate circle
function draw(){
    background("pink");
    x+=speed;

    if(x>width + r){
        x=-r;
    }

    ellipse(x, 200, r, r);
}
