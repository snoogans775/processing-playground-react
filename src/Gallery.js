import React from 'react';
import p5 from 'p5';
import './App.css';


function Gallery(props)  {
	const sketches = props.sketches
	
	return (
		sketches.map( (sketch, index) => <Card key={index} sketch={sketch}/>)
	)
}

class Sketch extends React.Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.myP5 = new p5 (this.sketch, this.myRef.current)
	}
	
	sketch = this.props.source
	
	render() {
		return (
			<div className="sketch" ref={this.myRef}>
			</div>
		)
	}
}

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="card">
				<Sketch source={this.props.sketch} />
			</div>
		)
	}
}

export default Gallery;
