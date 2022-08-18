import './App.css';
import { Score } from './components/Score'
import { Solution } from './components/Solution';
import { Letters } from './components/Letters';

function App() {
  
  // function generateLetterStatuses(){
  //   let letterStatus = {}
  //   for (let i = 65; i < 91; i++) {
  //     letterStatus[String.fromCharCode(i)] = false
  //   }
  //   return letterStatus
  // }

  let state = {  
    letterStatus: {
      A: false,
      B: false,
      C: false,
      D: false,
      E: true,
      F: false,
      G: false,
      H: false,
      I: false,
      J: false,
      K: false,
      L: false,
      M: false,
      N: false,
      O: false,
      P: false,
      Q: false,
      R: false,
      S: true,
      T: false,
      U: false,
      V: false,
      W: false,
      X: false,
      Y: true,
      Z: false
    },
    solution: {word: "BYTES", hint: "testing"},
    score: 100,
  }
  return (
    <div>
       <Score score={state.score}/>
       <Solution letterStatus={state.letterStatus} solution={state.solution}/>
       <Letters letterStatus={state.letterStatus}/>
    </div>
  );
}

export default App;
