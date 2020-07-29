import React from 'react';
import p5 from 'p5';
import './App.css';
import sketch from './sketches/bubbleBuffer';

//Alias for createElement
const ele = React.createElement;
const value = sketch;
console.log(value);

class Gallery extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
	  return (
			<div></div>
		)
	}

}

class BubbleBuffer extends React.Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.myP5 = new p5 (this.sketch, this.myRef.current)
	}

	sketch = (s) => {

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

	render() {
		return (
			<div className="container">
				<div className="sketch" ref={this.myRef}>
			</div>
		)
	}
}

class Card extends React.Component {
	constructor(props) {
		super(props);
	}
	
	renderThumbnail(sketch) {
		return(
			<Thumbnail
				sketch={sketch}
				onClick={this.props.onClick()}
			/>
		);
	}
	render() {
		return(
			<div className="card">
			{this.props.sketch}
			</div>
		)
	}
}

function Thumbnail(props) {
	return (
		<div className="thumbnail" onClick={props.onClick}>
			<p>I AM A THUMBNAIL</p>
			<div className="sketch">{props.sketch}</div>
		</div>
	);
}

export default Gallery;
