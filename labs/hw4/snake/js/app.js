let snake = [];

function setup(){
    createCanvas(600, 600);
    noStroke();
}

function draw(){
    background("pink");

    snake.push(new p5.Vector(mouseX, mouseY));

    if (snake.length > 10){
        snake.shift();
    }

    for (let i = 0; i < snake.length; i++){
        let p = snake[i];
        
        circle(p.x, p.y, 10);
    }
}