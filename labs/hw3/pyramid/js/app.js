let nRows = 3;

function setup(){
    createCanvas(402, 402);
}

function draw(){
    background("pink");
    fill("white");
    stroke("pink");
    strokeWeight(3);

    for(let row = 0; row <= nRows; row++){
        for (let col = 0; col <= row; col++){
            rect(col * 100, row * 100, 100, 100);
        }
    }
}