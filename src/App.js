import './App.css';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import TimeLeft from './components/TimeLeft';
import Author from './components/Author';
import { useState } from 'react';

function App() {

  //Duracion del break
  const [breakLength, setBreakLength] = useState(5)

  const handleBreakLengthChange = (breakLengthChild) => {
    setBreakLength(breakLengthChild);
  }

  //Duracion de la sesion
  const [sessionLength, setSessionLength] = useState(25)
  const handleSessionLengthChange = (sessionLengthChild) => {
    setSessionLength(sessionLengthChild)
  }


  return (
    <div className="App">
      <h1 className="title">25 + 5 Clock</h1>
      <div className="controls">
        <BreakLength onChange = {handleBreakLengthChange}/>
        <SessionLength onChange = {handleSessionLengthChange}/>
      </div>
      <TimeLeft />
      <Author />
    </div>
  );
}

export default App;
