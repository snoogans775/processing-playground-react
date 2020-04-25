let bubbles = [];

function setup() {
  createCanvas(400,400);
  for ( let i=0; i < 400; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(230, 230, 250);
  for ( let i = 0; i < bubbles.length; i++) {
    bubbles[i].run();
  }
}