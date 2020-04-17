let data = [];
let toggle = -1;

function setup() {
  createCanvas(200, 400);
  colorMode(HSB, 100);
  textSize(30);
  textAlign(CENTER);
  
  stroke(0);
  fill( 70, 20, 100 );
}
function draw() {
  background( 70, 20, 100 );
  data.push(random(height));
  
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
    line(i, height, i+1, data[i]);
  }
  text( 'CLICK', width/2, height - 30);
  
  //Control
  if ( toggle == 1) data.shift();
}


function mousePressed() {
  toggle = -toggle;
}
