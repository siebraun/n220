function setup(){
    createCanvas(400, 400);

}

function draw(){
    background("white");

    let ix = width - mouseX;  
    let iy = height - mouseY;

    ellipse(ix, iy, 20, 20);
}


//switch x and y values