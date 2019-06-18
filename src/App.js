import React from 'react';
import ImgCard from './components/ImgCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>clicky game</h1>
      </header>
      <main>
        <ImgCard imgName="heart" imgFile="heart.png" />
      </main>
    </div>
  );
}

export default App;
