let rows, cols;
let scl = 10;
let w = 1000;
let h = 600;

function setup() {
  createCanvas(300,400, WEBGL);
  rows = w/scl;
  cols = h/scl;
  smooth(4);
  noStroke();
  colorMode(HSB, 100);
}

let leftLimit = 0;
let rightLimit = 100;

let y;
let x = leftLimit;

function draw() {
  background(250, 10,10);
  
  // Position and rotate our rendering space
  rotateX(PI);
  
  // Center our rendering space
  translate(50, -50, -50);  // Relaxing view at 150,150,-100
  
  sunset();
  //beach();

  waves();

}

function equation(x) {
  let y;
  //y = cos(x/10)*40;
  y = sqrt(10 - x);
  return -y;
  
}

function derivative(x) {
    let diff = 0.0001;
    
    let x1 = x - diff;
    let x2 = x + diff;
    let y1 = equation(x1);
    let y2 = equation(x2);
    
    let deriv = (y1-y2) / (x1-x2);  
    
    return deriv;
  
}

function diffEq(x, y) {
  let rate = (frameCount * x)/sq(y);
  let result = (cos(x+rate)*20)/y;
  return map( result, -1,1, -10, 10);
  //return x+y;
}

function drawPlane() {
  stroke(1);
  line(0, 0-height, 0 , height);
  line(0-width, 0, width, 0);
}

function waves() {
  for (let y = 20; y < rows - 1; y++) {
    beginShape();
    for (let x = 0; x < rows; x++) {
       vertex(x*scl, y*scl, diffEq(x,y) );
       vertex(x*scl, (y+1)*scl, diffEq(x,(y+1)) );
       vertex(x, y, x);
    }
    endShape();
  }
}

function sunset(){
  for(let i=0;i<100;i+=4) {
  beginShape();
  let hue = map(i, 0,1000, 0,200);
  fill(hue,100, 200);
  
  // Upper left and upper right corners
  vertex(-600,0,10+i);
  vertex(1500,0,10+i);
  
  // Lower right and lower left corners
  vertex(1500,0, -100+i);
  vertex(-600,0, -100+i);
  endShape();
  }

}

function beach() {
  beginShape();
  fill(300,100,255);

  // Upper left and upper right corners
  vertex(-300,0,10);
  vertex(1500,0,10);
  
  // Lower right and lower left corners
  vertex(1500,0, -100);
  vertex(-400,0, -100);

  endShape();
}
