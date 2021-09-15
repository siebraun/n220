var colors = [];

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background("white");
    noStroke();

    let colors = [color(205, 180, 219), color(255, 200, 221), color(255, 175, 204)];
    for(let y = 0; y < 1; y++){
        for (let x = 0; x< 3; x++){
            let xpos = x*200;
            let ypos = y*200;
            fill(colors[x]);
            rect(xpos, ypos, 200, 200);
        }
    }
}