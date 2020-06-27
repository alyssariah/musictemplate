import React from 'react';
import {useState} from 'react'
import './App.sass'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import MobileHeader from './components/MobileHeader'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Lessons from './components/Lessons'
import Perform from './components/Perform'
import Policies from './components/Policies'
import Contact from './components/Contact'
import {useMediaQuery } from 'react-responsive'


function App() {
  const [instrument, setInstrument] = useState('Piano')
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  const isTabletOrMobile = useMediaQuery({
    query: '(max-device-width: 1023px)'
  })
  return (
    <BrowserRouter>
    <div className="main">
      <div className="App">
        {isDesktopOrLaptop && <Header setInstrument={setInstrument}/>}
        {isTabletOrMobile && <MobileHeader setInstrument={setInstrument}/>}
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/lessons"><Lessons instrument={instrument}/></Route>
            <Route path="/policies"><Policies/></Route>
            <Route path="/perform"><Perform /></Route>
            <Route path="/contact"><Contact/></Route>
            <Redirect to='/'/>
          </Switch>
        <footer>
          &copy; Alyssa's Music Studio
        </footer>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
