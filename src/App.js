import './App.css';
import { Score } from './components/Score'
import { Solution } from './components/Solution';
import { Letters } from './components/Letters';
import { Component } from 'react';
import EndGame from './components/EndGame';

class App extends Component {
   constructor(){
      super()
      
      this.state = {  
        letterStatus: this.generateLetterStatuses(),
        solution: {word: "CALM", hint: "Your ideal mood when coding."},
        score: 100,
        congratulations : {status: false, message: "Congratulations"},
        gameOver : {status: false, message: "Game Over!"}
      }
     
   }

   generateLetterStatuses(){
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

   selectLetter =  (letter) =>  {
    let status = this.state.letterStatus
    status[letter] = true
      this.setState({
        letterStatus: status,
      }) 
    
  }

  updateScore = (letter) => {
    let letters = this.state.solution.word
    if(!letters.includes(letter) && this.state.score >= 0){
       this.setState({
        score: this.state.score - 20
       })
    }else{
      this.setState({
        score: this.state.score + 5
       })
    }
  }
  
  displayMessage = () => {
    let letters = this.state.solution.word.split("")
    let gameOverState  = this.state.gameOver.status
    gameOverState = true
      if(this.score <= 0 && this.isGussed(letters)){
        this.setState({
          gameOver: gameOverState
        })
      }else{
        this.setState({
          congratulations: true
        })
      }
  }
  

  isGussed = (letters) => {
     for(let letter of letters){
        if(!this.state.letterStatus[letter]){
          return false
        }
     }
     return true
  }

  
  render = () => {
    return (
      <div>
         <Score score={this.state.score}  />
         <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
         <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} updateScore={this.updateScore}  />
         {this.state.score === 0 ? <EndGame message={this.state.gameOver.message} /> :  <EndGame message={this.state.congratulations.message} /> }  
      </div>
    );
  }
  
}

export default App;
