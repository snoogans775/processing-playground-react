function setup() {
  createCanvas(400,400);
  colorMode(RGB);
  let sandpiles = []; //A 2-dimensional array
  subpile = sandpiles.fill(0,0,400);
  console.log('subile: ' + subpile.length);
  sandpiles[200] = 100000; //Initial sandpile will topple outward
}

function topple(maxNum) {
  // The topple() function takes a values and uses it to control
  // the behavior of the sandpiles that topple away.
  // In this program, each pixel is computed as an individual sandpile.
  nextpiles = []; 
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let num = sandpiles[x][y];
        if (num < maxNum) {
        nextpiles[x][y] = sandpiles[x][y];
    }
   }
  }
 for (let x = 0; x < width; x++) {
  for (let y = 0; y < height; y++) {
    let num = sandpiles[x][y];
    if (num >= maxNum) {
      nextpiles[x][y] += (num - 4);
      if (x+1 < width) {
       nextpiles[x+1][y]++;
      }
      if (x-1 >= 0) {
        nextpiles[x-1][y]++;
      }
      if (y+1 < height) {
        nextpiles[x][y+1]++;
      }
      if (y-1 >= 0) {
      nextpiles[x][y-1]++;
      }
    }
  }
 }
 sandpiles = nextpiles;
}

function render() {
  let baseCol = 255;
  loadPixels();
  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++) {
      let num = sandpiles[x][y]; 
      let col = color(0,0,0);
      switch (num) {
        case 0:
          col = color(100,200,baseCol);
          break;
        case 1:
          col = color(100,baseCol,200);
          break;
        case 2:
          col = color(baseCol,200,baseCol);
          break;     
      }
      pixels[x+y*width] = col; // pixels[] is a 1-dimensional array native to Proessing
    }
  }
  
  updatePixels();
}

function draw() {
  render();
  for (let i = 0; i < 2; i++) {
   topple( Math.sin(frameCount * 0.01) );
  }
}
