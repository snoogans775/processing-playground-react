import React from 'react';
import p5 from 'p5';
import './App.css';


function Gallery(props)  {
	const sketches = props.sketches
	
	return (
		sketches.map( (sketch, index) => <Card key={index} sketch={sketch}/>)
	)
}

function Card(props) {
	const obj = props.sketch;
	console.log(props.sketch)
	
	return (
		<div className="card">
			<div className="thumbnail-container">
				<Sketch source={props.sketch} />
			</div>
		</div>
	)
}

class Sketch extends React.Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.myP5 = new p5 (this.sketch.sketch, this.myRef.current)
	}
	
	sketch = this.props.source
	
	render() {
		return (
			<div className="sketch" ref={this.myRef}>
			</div>
		)
	}
}

export default Gallery;
