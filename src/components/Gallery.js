import React from 'react';
import p5 from 'p5';
import VizSensor from 'react-visibility-sensor';


function Gallery(props)  {
	const sketches = props.sketches;
	
	return (
		<div className="Gallery">
		{sketches.map((s, index) => (
			<Card key={index} sketch={s} onClick={()=> window.prompt()}/>
		))}
		</div>
	)
}

class Card extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			metadata: props.sketch.metadata,
			verbose: true,
			sketch: props.sketch,
			sketchText: props.sketch.p5.toString()
		}
	}
	
	render() {
		return (
			<div className="Card" onClick = {this.state.onClick}>
				<div className="thumbnail-container">
					<Sketch source={this.state.sketch} />
					<Metadata content={this.state.metadata} />
				
				</div>
				<div className="description-container">
					<SourceCode plaintext={this.state.sketchText} />
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

class SourceCode extends React.Component {
	state = {
		visible: false
	}
	render() {
		return(
			<VizSensor
				onChange={(isVisible) => {
					this.setState({visible: isVisible})
				}}
			>
				<div 
					className="SourceCode"
					style={{
						transition: 'opacity 500ms linear',
						opacity: this.state.visible ? 1 : 0
					}}
				><pre>{this.props.plaintext}</pre></div>
			</VizSensor>
		);
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
	
	sketch = this.props.source;
	
	render() {
		return (
			<div className="sketch" ref={this.myRef}>
			</div>
		)
	}
}

export default Gallery;
