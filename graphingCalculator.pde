void setup() {
  size(600,600);
  background(255);
  smooth(4);
}

int leftLimit = -width*2;
int rightLimit = 100;

float y;
float x = leftLimit;

void draw() {

  translate(width/2,height/2);
  drawPlane();
  
  // Draw curve
  drawCurve();
}

float equation(float x) {
  float y;
  y = cos(x/10)*40;
  //y = ( (x*x*x)+(x*x)-(6*x) ) / ( (x*x) +(3*x) );
  //y = ( sin(x) )/( sin(2*x) );
  //y = map(cos(x)*sin(x), -1,1,-40,40);
  //y = (x*x*x)-(x*x)+(7*x);
  //y = sqrt(300-x*x);
  return y;
  
}

float derivative(float x) {
    float delta = 0.0001;
    
    float x1 = x - delta;
    float x2 = x + delta;
    float y1 = equation(x1);
    float y2 = equation(x2);
    float deriv = (y1-y2) / (x1-x2);  
    
    return deriv;
  
}

void drawCurve() {
  for( int x=-100;x<100;x++) {
    float y1 = equation(x);
    float y2 = equation(x+7);
    stroke(1);
    line(x, y, x+1, y2);
    //point(x,equation(x));
  }
}

void drawPlane() {
  stroke(1);
  line(0, 0-height, 0 , height);
  line(0-width, 0, width, 0);
}