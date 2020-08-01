import React from 'react';
import Gallery from './Gallery';
import sketches from './sketches';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery 
					sketches = {sketches}
				/>
      </header>
    </div>
  );
}

export default App;
