import './App.css';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import TimeLeft from './components/TimeLeft';
import Author from './components/Author';

function App() {
  return (
    <div className="App">
      <h1 className="title">25 + 5 Clock</h1>
      <div className="controls">
        <BreakLength />
        <SessionLength />
      </div>
      <TimeLeft />
      <Author />
    </div>
  );
}

export default App;
