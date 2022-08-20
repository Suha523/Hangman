import { Component } from "react";
import { Letter } from "./Letter";
import './Solution.css'
export class 
Solution extends Component {
  render() {
    let letters = this.props.solution.word.split("");
    let letterStatus = this.props.letterStatus;
    return (
      <div className="solution-field">
        <div className="letters">Solution: 
        {letters.map((l, key) =>
          letterStatus[l] ? <Letter key={key} letter={l} /> : <span key={l + "_"}> _ </span>
        )}
        </div>
        
        <div>
          <em>Hint: {this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}
