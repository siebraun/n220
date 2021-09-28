let xpos = 10;
let ypos = 100;
let wavelength = .1;
let amplitude = 100;
let spacing = 1;

function setup(){
    createCanvas(400, 400);
    fill(255,0,0);
}

function draw(){
    for (let i = 0; i < 50; i++){
        let sine = Math.sin(i*wavelength)*amplitude;
        circle(i*j + xpos, sine + ypos, 20);
    }
}