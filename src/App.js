import "./App.css";
import { Score } from "./components/Score";
import { Solution } from "./components/Solution";
import { Letters } from "./components/Letters";
import { Component } from "react";
import EndGame from "./components/EndGame";

class App extends Component {
  constructor() {
    super();

    this.game = [
      {word: "PRAY", hint: "to make a request in a humble manner"},
      {word: "GLUE", hint: "join to things to each other"},
      {word: "EGO", hint: "the 'I'"},
      {word: "SLIP", hint: "move easily and smoothly"},
      {word: "TOP", hint: "up"},
      {word: "GIFT", hint: "power of giving"},
      {word: "GASP", hint: "catch the breath"},
      {word: "GIANT", hint: "very big"},
      {word: "NAP", hint: "sleeping during the day"},
      {word: "MUD", hint: "when earth mixed with the water"}
     ]

    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: this.generateWords(),
      score: 100,
    };
  }

  generateWords = () => {
      let randomIndex = Math.floor(Math.random() * 10)
      let solution = this.game[randomIndex]
      return solution
  }
  
 
  
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  selectLetter = (letter) => {
    let status = this.state.letterStatus;
    status[letter] = true;
    this.setState({
      letterStatus: status,
    });
  };

  updateScore = (letter) => {
    let letters = this.state.solution.word;
    if (!letters.includes(letter) && this.state.score >= 0) {
      this.setState({
        score: this.state.score - 20,
      });
    } else {
      this.setState({
        score: this.state.score + 5,
      });
    }
  };

  isGussed = () => {
    let word = this.state.solution.word;
    let letters = word.split("");
    for (let letter of letters) {
      if (!this.state.letterStatus[letter]) {
        return false;
      }
    }
    return true;
  };

  isGameOver = () => {
    if (this.state.score <= 0) {
      return true;
    }
    return false;
  };

  resetState = () => {
    this.setState({
      score: 100,
      letterStatus: this.generateLetterStatuses(),
      solution: this.generateWords()
    });
  };

  render = () => {
   
    return this.isGameOver() || this.isGussed() ? (
      <div>
        <EndGame score={this.state.score} />
        <button onClick={this.resetState}>Return</button>
      </div>
    ) : (
      <div className="playground-field">
        <h1 className="header">Hangman Game</h1>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters
          letterStatus={this.state.letterStatus}
          selectLetter={this.selectLetter}
          updateScore={this.updateScore}
        />
      </div>
    );
  };
}

export default App;
