import React from 'react';
import Gallery from './components/Gallery';
import {Header, Footer} from './components/layout.js'
import sketches from './sketches';
import './style/App.css';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Gallery 
        sketches = {sketches}
      />
      <Footer />
    </div>
  );
}

export default App;
