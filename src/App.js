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

  //Resetear a valores por defecto
  const resetDefaultValues = () => {
    setBreakLength(5)
    setSessionLength(25)
  }


  return (
    <div className="App">
      <h1 className="title">25 + 5 Clock</h1>
      <div className="controls">
        <BreakLength breakLengthDefault = {breakLength} onChange = {handleBreakLengthChange}/>
        <SessionLength sessionLengthDefault = {sessionLength} onChange = {handleSessionLengthChange}/>
      </div>
      <TimeLeft breakLength = {breakLength} sessionLength = {sessionLength} resetDefaultValues = {resetDefaultValues}/>
      <Author />
    </div>
  );
}

export default App;
