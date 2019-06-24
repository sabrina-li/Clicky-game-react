import React from 'react';
import CardList from './components/CardList';
import {images} from "./images.json";
import MessageBanner from "./components/MessageBanner";
import './App.scss';

class App extends React.Component{
  state={
    highScore:0,
    currentScore:0,
    message:''
  }
  timerId = 0;


  increaseScore = ()=>{
    this.showMessage(true);
    this.setState(prevState=>{
      const newCurrentScore = prevState.currentScore + 1;
      const newHighScore = prevState.highScore>=newCurrentScore ? prevState.highScore:newCurrentScore;
      return {highScore:newHighScore,currentScore:newCurrentScore}
    })
  }

  resetScore = ()=>{
    this.showMessage(false);
    this.setState({currentScore:0});
  }

  showMessage = (correct)=>{
    clearTimeout(this.timerId);
    if(correct){
      this.setState({message:"Correct!"});
    }else{
      this.setState({message:"Wrong!"})
    }
    this.timerId = setTimeout(() => {
      this.setState({message:''})
  }, 1000);
  }

  render(){
    return <div className="App">
            <header className="App-header has-background-dark">
              <div className="level container has-text-light">
                <div>
                  <h1 className="title is-2 has-text-light">Visual Memory - Game!</h1>
                </div>
                <div id="scores">
                  <a className="subtitle is-5 has-text-link" href="/">How to</a>
                  <p>Current Score: <span>{this.state.currentScore}</span></p>
                  <p>Your High Score: <span>{this.state.highScore}</span></p>
                </div>
              </div>

            </header>
            <main>
              <MessageBanner message={this.state.message} />
              <CardList images={images} increaseScore={this.increaseScore} resetScore={this.resetScore}/>
            </main>
          </div>
  }

    
}

export default App;
