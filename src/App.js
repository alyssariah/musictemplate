import React from 'react';
import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'

function App() {
  const data = <h2>Available Lessons</h2>
  return (
    <div className="App">
      <header>
        <h1>Piano Lessons</h1>
      </header>
      <Switch>
        <Route exact path="/"><Home data={data}/></Route>
      </Switch>
    </div>
  );
}

export default App;
