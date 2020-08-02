import React from 'react';
import p5 from 'p5';


function Gallery(props)  {
	const sketches = props.sketches
	
	const onClick = () => console.log('clicked!');
	
	return sketches.map( (s, index) => <Card key={index} sketch={s} onClick={onClick}/>)
}

class Card extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			metadata: props.sketch.metadata,
			verbose: false,
			sketch: props.sketch
		}
	}
	
	render() {
		return (
			<div className="Card" onClick = {this.state.onClick}>
				<div className="thumbnail-container">
					<Sketch source={this.state.sketch} />
					<Metadata content={this.state.metadata} />
				
				</div>
			</div>
		)
	}
}

function Metadata(props) {
	const content = props.content;
	
	return (
		<div className="metadata">
			<p className="title">{content.title}</p>
			<p className="description">{content.description}</p>
			<div className="difficulty">{content.difficulty}</div>
		</div>
	)
}

class Description extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		}
	}
}

class Sketch extends React.Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.myP5 = new p5 (this.sketch.p5, this.myRef.current)
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
