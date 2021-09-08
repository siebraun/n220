function setup(){
    createCanvas(1300, 200);
    noStroke();
}


function draw(){

    //set y position
    let y = 100

    //set color values
    let blue = ("#b7cbe3");
    let green = ("#ccd18e");
    let purple = ("#aa8ab3");

    //create line of shapes
    for (let i = 1; i <26; ++ i){
        let x = i*50;

        //create blue rect if divisible by 3 and 5
        if (i % 3 == 0 && i % 5 ==00){
            fill(blue);
            rect(x, y, 50, 50);
        }

        //create green rect if divisible by 5
        else if (i % 5 === 0){
            fill(green);
            rect(x, y, 50, 50);
        }

        //create purple circle if divisible by 3
        else if(i % 3 === 0) {
            fill(purple);
            ellipse(x+25, y+25, 50, 50);
        }

        //create black circle if none of the above
        else{
            fill("black");
            ellipse(x+25, y+25, 50, 50);
        }
    }


}