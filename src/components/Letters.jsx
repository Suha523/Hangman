import { Component } from "react";
import { Letter } from "./Letter";
import "./Letters.css";
export class Letters extends Component {
  render() {
    let letterStatus = this.props.letterStatus;
    let letters = Object.keys(letterStatus);
    return (
      <div className="letters-field">
        <div>Available Letters</div>
        <div>
        {letters.map((l, key) =>
          letterStatus[l] ? (
            <span key={key} className="crossed-out letter">
              <Letter
                letter={l}
                updateScore={this.props.updateScore}
                selectLetter={this.props.selectLetter}
              />
            </span>
          ) : (
            <span key={key} className="letter">
                <Letter 
                
                letter={l}
                updateScore={this.props.updateScore}
                selectLetter={this.props.selectLetter}
              />
            </span>
              
            
          )
        )}
        </div>
      
      </div>
    );
  }
}
