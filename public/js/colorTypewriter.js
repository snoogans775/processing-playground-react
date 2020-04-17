//Color Typewriter for P5.js
//Refactored for P5.js by Kevin Fredericks
//Color Typewriter concept by John Maeda
//Example code taken from processing.org

const colorTypewriter = ( s ) => {

	let maxHeight;
	let minHeight;
	let letterHeight;      // Height of the letters
	let letterWidth;       // Width of the letter

	let x, y;              // Position of the letters
	let newletter;
	
	let textX, textY;         
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
