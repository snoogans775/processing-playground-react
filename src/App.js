import React from 'react';
import logo from './logo.svg';
import Gallery from './Gallery';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	  return (
	    <div className="App">
	      <header className="App-header">
	        <Gallery />
	      </header>
	    </div>
	  );
	}
}

export default App;
