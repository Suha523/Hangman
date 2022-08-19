import React, { Component } from 'react'

export default class EndGame extends Component {
   
  render() {
    return (
        <div>
           {this.props.score <= 0 ? <div> Game Over </div>  : <div>congratulations</div> }
        </div>
      
    )
  }
}
