function setup() {
  createCanvas(400, 300);
  noStroke();
}


function draw() {
  background(145, 161, 196);

  //detects mouse on right, colors red
  if (mouseX > 200) {
      ellipse(mouseX, mouseY, 9, 9);
      fill("red"); 
  }

  //detects mouse on left, colors blue
  else {
    ellipse(mouseX, mouseY, 9, 9);
    fill("blue"); 
  }
}