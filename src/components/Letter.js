import { Component } from "react";

export class Letter extends Component{

    render(){
        let letter = this.props.letter
        return <span>{letter}</span> 
    }
}