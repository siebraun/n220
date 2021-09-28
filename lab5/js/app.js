// let oos = [ 15, 22, 10, 5, 10 ];
// let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03", "#ed1a80" ]

// function setup() {
//   createCanvas(400, 400);
  
//     translate(200,200);
//   background(50);
  
//   for( let i = 0; i < oos.length; i++) {
//     fill(ahs[i]);
//     circle(sin(i) * 40, cos(i)* 40, oos[i]);
//   }
// }


let oos = [ 15, 22, 10, 5, 10, 22 ];
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ]

function setup() {
  createCanvas(400, 400);

}

function draw() {

  background(50);
  translate(200,200);
  
  if (mouseIsPressed) {
    oos.push(Math.random() * 25);
    
    if(Math.random() < .5 ) {
      ahs.push("#fcba03");
    } else {
      ahs.push("#ed1a80");
    }
  }
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 40, cos(i)* 40, oos[i]);
  }
  
}