import { Component } from "react";
import { Letter } from "./Letter";

export class Solution extends Component {
  render() {
    let letters = this.props.solution.word.split("");
    let letterStatus = this.props.letterStatus;
    return (
      <div>
        {letters.map((l) =>
          letterStatus[l] ? <Letter key={l} letter={l} /> : <span key={l + "_"}>_ </span>
        )}
        <div>
          <em>{this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}
