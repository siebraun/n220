//variables

//define vertex points
const v = {
    vX: -80,
    vY: 0
};

//define bezier points
const eye = {
    eyeX1: -30,
    eyeY1: -50,
    eyeX2: 30,
    eyeY2: -50,
    eyeX3: 80,
    eyeY3: 0
};

//define pupil size and position
const pupil = {
    pupilX: 0,
    pupilY: 0,
    pupilR: 50
};

let pupilColor = "black";
let scleraColor = "white";
//end variables


//set up canvas
function setup(){
    createCanvas(400, 400);
    background("pink");
}

//draw function
function draw(){
    translate(width/2, height/2);

    //draw eye shape
    fill(scleraColor);
    beginShape();
    vertex(v.vX, v.vY);
    bezierVertex(eye.eyeX1, eye.eyeY1, eye.eyeX2, eye.eyeY2, eye.eyeX3, eye.eyeY3);
    bezierVertex(-eye.eyeX1, -eye.eyeY1, -eye.eyeX2, -eye.eyeY2, -eye.eyeX3, -eye.eyeY3);
    endShape();

    //draw pupil
    fill(pupilColor);
    ellipse(pupil.pupilX, pupil.pupilY, pupil.pupilR);
}
