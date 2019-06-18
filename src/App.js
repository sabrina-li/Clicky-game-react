import React from 'react';
import CardList from './components/CardList';
import {images} from "./images.json";
import './App.css';

// console.log(images);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>clicky game</h1>
      </header>
      <main>
        <CardList images={images} />
      </main>
    </div>
  );
}

export default App;
