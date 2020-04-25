class Bubble {
   constructor () {    
    this.seed = random(0, 0.1);
    this.x = ceil( random(width) );
    this.y = ceil( random(height) );
    this.z = ceil( random(1, 5) ); 
    
    this.yVelocity = ceil( random(-3, -1));
    this.xVelocity = 0;

    this.PURPLE = color(138, 43, 226);
  }

  update() {
    this.float();
  }
  
  pop() {
    // Randomly pop bubbles if they reach the top
    if ( ceil(this.x)  == millis() % width ) {
      this.y = height;
    }
  }
  
  float() {
    this.xVelocity = noise( frameCount * this.seed );
    this.x += map(this.xVelocity, 0, 1, -0.1, 0.1);
    
    if ( this.y > this.z ) {
      this.y += this.yVelocity;
    } else {
      this.y = this.z; // This makes the bubble stop
      this.pop();
    }
  }

  render() {
    stroke(this.PURPLE);
    ellipse(
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