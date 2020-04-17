//Sandpiles for P5.js
//Refactored for P5.js by Kevin Fredericks
//Sandpiles concept by Daniel Shiffman//End of closure
//Example code taken from processing.org

const sandpiles = (s) => {

	let sandpiles = [];
	let nextpiles = [];
	let maxHeight = 3;
	let colorRange = 10;
	let xScl, yScl, w, h;
	let smallChange;

	s.setup = () => {
	  s.createCanvas(200, 400);
	  s.colorMode(s.HSB, colorRange);
	  s.noStroke();
	  s.frameRate(6);
  
	  //Establish scale variables
	  xScl = 10;
	  yScl = 10;
	  w = s.width/xScl;
	  h = s.height/yScl;
  
	  //Populate sandpiles
	  for ( let x = 0; x < w; x++ ) {
	    sandpiles[x] = [];
	    nextpiles[x] = [];
	    for ( let y = 0; y < h; y++ ) { 
	      sandpiles[x][y] = 0;
	      nextpiles[x][y] = 0;
	    }
	  }
	  //Create initial sandpiles
	  sandpiles[w/2][h/2] = 1000000;
	}

	s.topple = (speed, maxHeight) => {
	  for ( let i = 0; i < speed; i++ ) {
	    // BEGIN UPDATE
	    for ( let x = 0; x < w; x++) {
	      for ( let y = 0; y < h; y++) {
	        nextpiles[x][y] = sandpiles[x][y];
	      }
	    }
	    for ( let x = 0; x < w; x++) {
	      for ( let y = 0; y < h; y++) { 
	        let num = sandpiles[x][y];
	        if ( num >= maxHeight ) {
	          nextpiles[x][y] -= 6;
	          if ( x + 1 < w ) nextpiles[x+1][y]++;
	          if ( x - 1 > 0 ) nextpiles[x-1][y]++;
	          if ( y + 1 < h ) nextpiles[x][y+1]+=2;
	          if ( y - 1 > 0 ) nextpiles[x][y-1]+=2;
	        }
	      }
	    }
    
	    let tmp = sandpiles;
	    sandpiles = nextpiles;
	    nextpiles = tmp;
	  }
	}

	s.draw = () => {
	  s.topple( 1, 2);
  
	  //Draw boxes
	  for ( let x = 0; x < w; x++) {
	    for ( let y = 0; y < h; y++) {
      
	      let bright = sandpiles[x][y] * 2.5;
	      let smallChange = s.sin( s.millis() * 0.00001);
	      smallChange = s.map(smallChange, -1, 1, 0, colorRange);
	      let xSize = x * xScl;
	      let ySize = y * yScl;
      
	      s.fill(smallChange, 100, bright);
	      s.rect(xSize, ySize, 10, 10);
	    }
	  }
	}
} //End of closure
