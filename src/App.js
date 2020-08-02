import React from 'react';
import Gallery from './components/Gallery';
import sketches from './sketches';
import './style/App.css';

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
