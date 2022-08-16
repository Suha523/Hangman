import { Component } from "react";

export class Solution extends Component {
  
  render() {
    let underScores = [];
    for (let i = 0; i < 4; i++) {
      underScores.push("_ ");
    }
    return (
      <div>
        {underScores.map((us) => (
          <span>{us}</span>
        ))}

        <div>
          <em>Your ideal mood when coding.</em>
        </div>
      </div>
    );
  }
}
