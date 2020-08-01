//Color Typewriter for P5.js
//Refactored for P5.js by Kevin Fredericks
//Color Typewriter concept by John Maeda
//Example code taken from processing.org
const colorTypewriter = ( s ) => {

	let metadata = {
		id: 'colorTypewriter',
		title: 'Color Typewriter',
		difficulty: 'Beginner',
		description: 'Make art with your keyboard',
		tags: 'interactive, visual art'
	}
	
	let maxHeight;
	let minHeight;
	let letterHeight;      // Height of the letters
	let letterWidth;       // Width of the letter

	let x, y;              // Position of the letters
	let newletter;
	
	let textX, textY;
	let textPosition;
	let keyColor;

	s.setup = () => {
	  s.createCanvas(200,200);
	  s.noStroke();
	  s.colorMode(s.HSB, 100);
	  s.background(80);
		
		maxHeight = s.height / 8;
		minHeight = s.height / 8;
		letterHeight = maxHeight; 
		letterWidth = s.width / 4;

		x = -letterWidth;
		y = 0;
		newletter = true; 
		
		textPosition = [s.width/2, s.height - 30];   
	  s.textSize(30);
	  s.textAlign(s.CENTER);
		textX = s.width/2;
		textY = s.height - 30;
		s.text( 'TYPE', textX, textY);
	};

	s.draw = () => {
	  if (newletter == true) {
	    // Draw the "letter"
	    let y_pos;
	    if (letterHeight == maxHeight) {
	      y_pos = y;
	      s.rect( x, y_pos, letterWidth, letterHeight );
	    } else {
	      y_pos = y + minHeight;
	      s.rect( x, y_pos, letterWidth, letterHeight );
	      //fill(numChars/2);
	      s.rect( x, y_pos-minHeight, letterWidth, letterHeight );
	    }
	    newletter = false;
	  };
	};

	s.keyPressed = () => {
	  let keyIndex = s.key.charCodeAt(0); //Convert key to a number
	  let keyColor = keyIndex % 100;    //Constrain keyIndex 
	  s.fill(keyColor, 100, 90);        //Change fill to our new color
 
	  newletter = true;

	  // Update the "letter" position
	  x = ( x + letterWidth ); 

	  // Wrap horizontally
	  if (x > s.width - letterWidth) {
	    x = 0;
	    y+= maxHeight;
	  }

	  // Wrap vertically
	  if( y > s.height - letterHeight) {
	    y = 0;      // reset y to 0
	  }
	};
}; //End of closure

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
	  s.createCanvas(200, 200);
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

//Happy Little Mountains for P5.js
//by Kevin Fredericks
//License MIT

const happyMountains = ( s ) => {
	let x, y;
	let smallChange;
	let colorBrightness, mtnColor;
	let amplitude;

	s.setup = () => {
	  s.createCanvas(200, 200);
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
  
	  //starting over when we reach the edges
	  if ( x > s.width ) {
	    x = 0;
	    y += 50;
	    colorBrightness -= 10;
	  }
		if ( y > s.height ) {
			x = 0;
			y = 0;
			colorBrightness = 90;
		}
  
	}

} //End of closure

//Bubble Sort Buffer for P5.js
//by Kevin Fredericks
//License MIT

const bubbleBuffer = ( s ) => {

	let data = [];
	let textPosition = [];
	let toggle = -1;

	s.setup = () => {
	  s.createCanvas(200, 200);
	  s.colorMode(s.HSB, 100);
	  s.textSize(30);
	  s.textAlign(s.CENTER);
		textPosition = [s.width/2, s.height - 30];
  
	  s.stroke(0);
	  s.fill( 70, 20, 100 );
	}
	s.draw = () => {
	  s.background( 70, 20, 100 );
		
		let incomingValue = s.random(s.height);
	  data.push( incomingValue );
  
	  //Update
	  for( let i = 0; i < data.length - 1; i++ ) {
	    if ( data[i] > data[i+1] ) {
	      let temp = data[i];
	      data[i] = data[i+1];
	      data[i+1] = temp;
	    }
	  }
  
	  //Render
	  for( let i = 0; i < data.length - 1; i++ ) {
	    s.line(i, s.height, i+1, data[i]);
	  }
	  s.text( 'CLICK', textPosition[0], textPosition[1] );
  
	  //Control
	  if ( toggle == 1) data.shift();
	}


	s.mousePressed = () => {
	  toggle = -toggle;
	}
} //End of closure

//Soda Pop for P5.js
//by Kevin Fredericks April 24, 2020
//License MIT 

const sodaPop = ( s ) => {
	
	let bubbles = [];

	s.setup = () => {
	  s.createCanvas(200,200);
	  for ( let i=0; i < 100; i++) {
	    bubbles[i] = new Bubble();
	  }
	}

	s.draw = () => {
	  s.background(255);
	  for ( let i = 0; i < bubbles.length; i++) {
	    bubbles[i].run();
	  }
	}

	class Bubble {
	   constructor () {    
	    this.seed = s.random(0, 0.1);
			
	    this.x = s.ceil( s.random( s.width ) );
	    this.y = s.ceil( s.random( s.height ) );
	    this.z = s.ceil( s.random(1, 5) ); 
    
	    this.yVelocity = s.ceil( s.random(-3, -1));
	    this.xVelocity = 0;

	    this.PURPLE = s.color(138, 43, 226);
	  }

	  update() {
	    this.float();
	  }
  
	  pop() {
	    // Randomly pop bubbles if they reach the top
	    if ( s.ceil( this.x )  == s.millis() % s.width ) {
	      this.y = s.height;
	    }
	  }
  
	  float() {
	    this.xVelocity = s.noise( s.frameCount * this.seed );
	    this.x += s.map(this.xVelocity, 0, 1, -0.1, 0.1);
    
	    if ( this.y > this.z ) {
	      this.y += this.yVelocity;
	    } else {
	      this.y = this.z; // This makes the bubble stop
	      this.pop();
	    }
	  }

	  render() {
	    s.stroke(this.PURPLE);
	    s.ellipse(
	      this.x, 
	      this.y, 
	      this.z, 
	      this.z
	    );
	  }

	  run() {
	    this.update();
	    this.render();
	  }
	}
} //End of closure

//Load functions in to an object with associated metadata
const colorTypewriterObj = {
	metadata : {
		id: 'colorTypewriter',
		title: 'Color Typewriter',
		difficulty: 'Beginner',
		description: 'Make art with your keyboard',
		tags: 'interactive, visual art'
	},
	
	p5: colorTypewriter
}
const happyMountainsObj = {
	metadata: {
		id: 'happyMountains',
		title: 'Happy Mountains',
		difficulty: 'Beginner',
		description: 'Make an AI artist',
		tags: ['visual art, generative']
	},
	
	p5: happyMountains
}
const sandpilesObj = {
	metadata: {
		id: 'sandpiles',
		title: 'Sandpiles',
		difficulty: 'Challenging',
		description: 'Code a dynamic system',
		tags: 'animation, algorithms, visual art'
	},
	
	p5: sandpiles
}
const bubbleBufferObj = {
	metadata: {
		id: 'bubbleBuffer',
		title: 'Bubble Buffer',
		difficulty: 'Beginner',
		description: 'Visualize a bottleneck',
		tags: ['algorithms, animation, interactive']
	}
	,
	
	p5: bubbleBuffer
}
const sodaPopObj = {
	metadata: {
		id: 'sodaPop',
		title: 'Soda Pop',
		difficulty: 'Intermediate',
		description: 'Model some bubbles',
		tags: ['animation, visual art']
	}
	,
	
	p5: sodaPop
}

let sketches = [colorTypewriterObj, sandpilesObj, happyMountainsObj, bubbleBufferObj, sodaPopObj];
export default sketches;