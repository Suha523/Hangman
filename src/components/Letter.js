import { Component } from "react";

export class Letter extends Component{
    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
        this.props.updateScore(this.props.letter)
    }

    render(){
        let letter = this.props.letter
        return <span onClick={this.selectLetter}> {letter} </span> 
    }
}