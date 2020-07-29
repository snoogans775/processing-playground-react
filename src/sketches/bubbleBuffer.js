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
