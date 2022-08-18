import {Component} from 'react'

export class Score extends Component{
   
   render(){
    let score = this.props.score
       return <div>{score}</div>
   }
}

