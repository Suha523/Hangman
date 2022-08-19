import { Component } from "react";
import { Letter } from "./Letter";
import "./Letters.css";
export class Letters extends Component {
  render() {
    let letterStatus = this.props.letterStatus;
    let letters = Object.keys(letterStatus);
    return (
      <div>
        <div>Available Letters</div>
        {letters.map((l, key) =>
          letterStatus[l] ? (
            <span key={key} className="crossed-out">
              <Letter letter={l} updateScore={this.props.updateScore} selectLetter={this.props.selectLetter} />
            </span>
          ) : (
            <Letter key={key} letter={l} updateScore={this.props.updateScore} selectLetter={this.props.selectLetter} />
          )
        )}
      </div>
    );
  }
}
