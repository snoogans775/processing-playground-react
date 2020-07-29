import React from 'react';
import logo from './logo.svg';
import './App.css';

class Gallery extends React.Component {
	renderCard
  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Card extends React.Component {
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
			<div className="card" onClick={props.onClick}>
				{this.renderThumbnail(this.props.sketch)}
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
