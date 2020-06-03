import React from 'react';
import './App.sass'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Lessons from './components/Lessons'
import Perform from './components/Perform'
import Policies from './components/Policies'
import Contact from './components/Contact'

function App() {
  return (
    <main>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/lessons"><Lessons/></Route>
        <Route path="/policies"><Policies/></Route>
        <Route path="/perform"><Perform /></Route>
        <Route path="/contact"><Contact/></Route>
        <Redirect to='/'/>
      </Switch>
    </div>
    </main>
  );
}

export default App;
