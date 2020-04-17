let sandpiles = [];
let nextpiles = [];
let maxHeight = 7;
let colorRange = 12;

function setup() {
  createCanvas(200, 400);
  colorMode(HSB, colorRange);
  noStroke();
  frameRate(60);

  //Populate sandpiles
  for ( let i = 0; i < 50; i++) { 
    sandpiles[i] = 3;
  }
  //Create initial sandpiles
  sandpiles[10] = 10000000;
  sandpiles[30] = 10000000;
}

function topple() {
  let len = sandpiles.length;
  nextpiles.fill(0, 0, len);

  for ( let i = 0; i < len; i++) {
    let num = sandpiles[i];
    if ( num <= maxHeight ) {
      nextpiles[i] = sandpiles[i];
    }
  }

  for ( let i = 0; i < len; i++ ) { 
    let num = sandpiles[i];
    if ( num >= maxHeight ) {
      nextpiles[i] = (num - 3);
      if ( i < len ) { nextpiles[i+1] += 1;}
      if ( i-1 >= 0 ) { nextpiles[i-1] += 1;}
    }
  }
  for ( let i = 0; i < sandpiles.length; i++) { 
    sandpiles[i] = nextpiles[i];
  }
}

function draw() {
  background(3);
  for( let i = 0; i < 20; i++ ) {
    topple();
  }
  
  //Draw boxes
  for ( let i = 1; i <= sandpiles.length; i++) {
    let hue = 4 + sandpiles[i];
    fill(hue, 20, 30);
    rect(0, i * 8, width, 2);
  }
}
