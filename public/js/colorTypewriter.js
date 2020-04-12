//Color Typewriter for P5.js
//Refactored for P5.js by Kevin Fredericks
//Color Typewriter concept by John Maeda
//Example code taken from processing.org

const colorTypewriter = ( s ) => {

	let maxHeight = 40;
	let minHeight = 40;
	let letterHeight = maxHeight; // Height of the letters
	let letterWidth = 80;          // Width of the letter

	let x = -letterWidth;          // X position of the letters
	let y = 0;                      // Y position of the letters

	let newletter = true;              

	//let numChars = 26;      // There are 26 characters in the alphabet
	let keyColor;

	s.setup = () => {
	  s.createCanvas(400,400);
	  s.noStroke();
	  s.colorMode(s.HSB, 100);
	  s.background(100);
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
}; //End of closurew
