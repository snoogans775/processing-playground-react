let x, y;
let smallChange;
let colorBrightness, mtnColor;

function setup() {
  createCanvas(100, 400);
  colorMode(HSB, 100);
  background(0, 70, 80);
  
  x = 0;
  y = 20;
  colorBrightness = 90;
  mtnColor = color(60, 60, 30);
}

function draw() {
  
  //drawing line line(x1, y1, x2, y2)
  stroke(60,80,colorBrightness);
  line(x, y, x, y+100);
  
  //moving line to the right
  x += 1;
  
  //move y up and down
  smallChange = noise(millis() * 0.001) - 0.5;
  amplitude = 2;
  y += smallChange * amplitude;
  
  //starting over when we reach the edge
  if ( x > width ) {
    x = 0;
    
    //do stuff with the new line
    y += 50;
    colorBrightness -= 10;
  }
  
}