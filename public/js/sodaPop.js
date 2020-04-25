//Bubble Sort Buffer for P5.js
//by Kevin Fredericks April 24, 2020
//License MIT 

const sodaPop = ( s ) => {
	
	let bubbles = [];

	s.setup = () => {
	  s.createCanvas(200,200);
	  for ( let i=0; i < 400; i++) {
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
}