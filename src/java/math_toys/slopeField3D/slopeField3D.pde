int rows, cols;
int scl = 10;
int w = 1000;
int h = 600;

PImage img;

void setup() {
  fullScreen(P3D);
  //size(600,600, P3D);
  rows = w/scl;
  cols = h/scl;
  smooth(4);
  noStroke();
  colorMode(HSB);
  
  img = loadImage("pic.png");
}

int leftLimit = -width*2;
int rightLimit = 100;

float y;
float x = leftLimit;

void draw() {
  background(250, 10,10);

  //translate(width/2,height/2);
  
  // Position and rotate our rendering space
  //rotateZ(-PI/2);
  rotateX(PI/2.95);
  
  // Center our rendering space
  translate(150, -50, -80);  // Relaxing view at 150,150,-100
  
  sunset();
  //beach();

  waves();

}

float equation(float x) {
  float y;
  //y = cos(x/10)*40;
  y = sqrt(10 - x);
  return -y;
  
}

float derivative(float x) {
    float diff = 0.0001;
    
    float x1 = x - diff;
    float x2 = x + diff;
    float y1 = equation(x1);
    float y2 = equation(x2);
    
    float deriv = (y1-y2) / (x1-x2);  
    
    return deriv;
  
}

float diffEq(float x, float y) {
  float rate = (frameCount * x)/sq(y);
  float result = (cos(x+rate)*20)/y;
  return map( result, -1,1, -10, 10);
  //return x+y;
}

void drawPlane() {
  stroke(1);
  line(0, 0-height, 0 , height);
  line(0-width, 0, width, 0);
}

void waves() {
  directionalLight(50, 0, 126, 500, 0, -1);
  ambientLight( 150, 200, 200);
  for (int y = 20; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (int x = 0; x < rows; x++) {
       vertex(x*scl, y*scl, diffEq(x,y) );
       vertex(x*scl, (y+1)*scl, diffEq(x,(y+1)) );
    }
    endShape();
  }
}

void sunset(){
  for(int i=0;i<100;i+=4) {
  beginShape();
  int hue = int( map(i, 0,1000, 0,200) );
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

void beach() {
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
