let ball = {
    xSpeed: 5,
    ySpeed: 5,
    x: 40,
    y: 200,
    r: 30,
};

//setup
function setup(){
    createCanvas(800,600);
}

//draws and animates ball
function draw(){
    background("thistle");

    ellipse(ball.x, ball.y, ball.r*2, ball.r*2);
   ball.x+= ball.xSpeed;
    ball.y+= ball.ySpeed;

    if(ball.x > width - ball.r || ball.x<ball.r) {
        ball.xSpeed = -ball.xSpeed;
    }

    if(ball.y > height - ball.r || ball.y<ball.r){
        ball.ySpeed = -ball.ySpeed;
    }
}