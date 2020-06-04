import React from 'react';
import './App.sass'
import {Switch, Route, Redirect} from 'react-router-dom'
import MobileHeader from './components/MobileHeader'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Lessons from './components/Lessons'
import Perform from './components/Perform'
import Policies from './components/Policies'
import Contact from './components/Contact'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  const isTabletOrMobile = useMediaQuery({
    query: '(max-device-width: 1023px)'
  })
  return (
    <div className="main">
    <div className="App">
      {isDesktopOrLaptop && <Header/>}
      {isTabletOrMobile && <MobileHeader/>}
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
    </div>
  );
}

export default App;
