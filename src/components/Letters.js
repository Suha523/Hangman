import { Component } from "react";
import { Letter } from "./Letter";

export class Letters extends Component{

    render(){
        return (
            <div>
                <div>Available Letters</div>
                <Letter />
            </div>
            
        )
    }
}