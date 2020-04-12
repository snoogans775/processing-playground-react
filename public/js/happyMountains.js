//Happy Little Mountains for P5.js
//by Kevin Fredericks
//License MIT

const happyMountains = ( s ) => {

	let x, y;
	let smallChange;
	let colorBrightness, mtnColor;

	s.setup = () => {
	  s.createCanvas(200, 400);
	  s.colorMode(s.HSB, 100);
	  s.background(0, 70, 80);
  
	  x = 0;
	  y = 20;
	  colorBrightness = 90;
	  mtnColor = s.color(60, 60, 30);
	}

	s.draw = () => {
  
	  //drawing line line(x1, y1, x2, y2)
	  s.stroke(60,80,colorBrightness);
	  s.line(x, y, x, y+100);
  
	  //moving line to the right
	  x += 1;
  
	  //move y up and down
	  smallChange = s.noise(s.millis() * 0.001) - 0.5;
	  amplitude = 2;
	  y += smallChange * amplitude;
  
	  //starting over when we reach the edge
	  if ( x > s.width ) {
	    x = 0;
    
	    //do stuff with the new line
	    y += 50;
	    colorBrightness -= 10;
	  }
  
	}

} //End closure