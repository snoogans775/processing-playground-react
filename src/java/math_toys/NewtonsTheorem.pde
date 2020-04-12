void setup() {
  size(1000,800);
  smooth();
}

void draw() {
  background(200,250,250);
  translate(width/2, height/2);
  
  // Draw curve of f(x)
  stroke(0);
  for(int x = -width/2; x< width/2; x++) { 
    // Negative f(x) values flip the graph
    line(x, -f(x), x+1, -f(x+1));
  }
  
  // Draw 6 approximation lines to determine the x-intercept
  newtonApprox();
  
  // Draw a coordinate plane to help locate zeroes
  drawPlane();

}

float f(float x) {
  float y;
  
  y = (pow(x,2)*0.003) - 20; //Parabola with negative y-intercept
  //y = sin(x/60)*100 - 10; //Sine wave with period of 60 and amplitude of 100
  
  return y;
}

void newtonApprox() {
  stroke(255,0,0); //Red color for approximation line
  
  float nextX = mouseX-width/2;
  float nextXIntercept = nextX - (f(nextX)/dX(nextX));
  float nextY = -f(nextX);
  
  // Negative f(x) values flip the graph
  line(nextX, nextY, nextXIntercept, 0 );
    
  //Draw line from x-intercept up to f(x-intercept)
  line(nextXIntercept, 0, nextXIntercept, -f(nextXIntercept));
      

  for (int i = 0; i < 10; i++) {
    nextX = nextXIntercept;
    nextY = -f(nextXIntercept);
    nextXIntercept = nextX - (f(nextX)/dX(nextX));
    
    //Negative f(x) values flip the graph
    line(nextX, nextY, nextXIntercept, 0 );
    
    //Draw line from x-intercept up to f(x-intercept)
    line(nextXIntercept, 0, nextXIntercept, -f(nextXIntercept));
    
    //Output approximations to console
    fill(0);
    String t = ("x-" + i + " has a zero at " + nextXIntercept);
    text(t, 20, 40 + (i*20));
      
  }
  
  //println(initX+", "+f(initX)+", dX(initX)="+dX(initX));
}

float dX(float x) {
    float delta = 0.1; // Smaller values for delta of x can be used for more precision
    
    float x1 = x + delta;
    float x2 = x;
    float y1 = f(x1);
    float y2 = f(x2);
    float derivative = (y1-y2) / (x1-x2);// Formula for secant line
    
    return derivative;// This is technically the secant, but it approximates for pixels.
  
}

void drawPlane() {
  stroke(1);
  line(0, 0-height, 0 , height);
  line(0-width, 0, width, 0);
}
