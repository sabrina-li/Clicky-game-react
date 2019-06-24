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
    return <div className="App container">
            <header className="App-header">
              <h1>Visual Memory Game</h1>
              <div id="scores">
                <p>Current Score: <span>{this.state.currentScore}</span></p>
                <p>Your High Score: <span>{this.state.highScore}</span></p>
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
