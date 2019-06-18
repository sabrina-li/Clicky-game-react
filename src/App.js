import React from 'react';
import CardList from './components/CardList';
import {images} from "./images.json";
import './App.css';

class App extends React.Component{
  state={
    highScore:0,
    currentScore:0
  }

  increaseScore = ()=>{
    this.setState(prevState=>{
      const newCurrentScore = prevState.currentScore + 1;
      const newHighScore = prevState.highScore>=newCurrentScore ? prevState.highScore:newCurrentScore;
      return {highScore:newHighScore,currentScore:newCurrentScore}
    })
  }

  resetScore = ()=>{
    this.setState({currentScore:0});
  }

  render(){
    console.log(this.state)
    return <div className="App">
            <header className="App-header">
              <h1>clicky game</h1>
              <div>
                <p>Current Score: <span>{this.state.currentScore}</span></p>
                <p>Your High Score: <span>{this.state.highScore}</span></p>
              </div>
            </header>
            <main>
              <CardList images={images} increaseScore={this.increaseScore} resetScore={this.resetScore}/>
            </main>
          </div>
  }

    
}

export default App;
