//JavaScript Jellyfish
//2020 Kevin Fredericks

double x, y;  //Initializing
float stretch, yOffset, phase, frequency;
float variance, deviation;

void setup() {
  size(600, 1000);
  colorMode(HSB, 100); 
  //smooth();
  
  x = 0;
  y = 0;
  stretch = 0.01;
  yOffset = 20; //yOffset is the width between waves
  phase = 0;
  variance = 0;
  deviation = 0;
}

void draw() {
  translate(0, 0);
  background(20,5,0); 
  
  //Control
  variance = map(mouseX, 0, width, PI, PI*1.01); //Modifies phase of sine void
  yOffset = map(mouseY, 0, height, 10, 80);
  
  //Render
  for(int x = 0; x < width*2; x++) {
    for(int j = 1; j < height/2; j+= yOffset) {
      double sinMillis = Math.sin(millis() * 0.1);
      double ripple = Math.cos(sinMillis/1000);
      float thickness = x * 0.1;
      int nextX = x + j;
      int nextY = (int) (y + j * ripple);
      stroke(j%30 + 60, 60, 80);
      brush(nextX, nextY, thickness);  //x needs a constant to control tentacle width
      
      //Update y for each tentacle
      deviation = variance * j;
      y = (Math.sin(x * stretch + phase + deviation) * 10) ;
    }
  }
  
  //Update
  phase = millis() * 0.002;
}

void brush(int x, int y, float h) {
  //Arguments: line(x1, y1, x2, y2)
  //Output: line of length h at an angle of 45 degrees
  //int[] angle = [h/2, h/4, h/6, 0];
  line(x, y, x, y + h);
}
