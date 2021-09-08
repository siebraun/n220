//set number of rings
let rings = 40;

//set max diameter
let maxD = 400

function setup(){
    createCanvas(400, 400);
    ellipseMode(CENTER);

    background("pink");

    for(let i = 0; i < rings ; i++) {
        let currentD = maxD * (rings-i)/40

        ellipse(width/2, height/2, currentD, currentD);
    }
}