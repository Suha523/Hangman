import {Component} from 'react'
import './Score.css'
export class Score extends Component{

   render(){
    let score = this.props.score
     if(score >= 80){
      return <div className='high-score'>{score}</div>
     }

     if(score >= 50 && score < 80){
      return <div className='medium-score'>{score}</div>
     }
      
     if(score < 50){
      return <div className='low-score'>{score}</div>
     }
   }
}

