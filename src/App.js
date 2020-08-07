import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' render={() => <Explore/>}/>
        <Route path='/register' render={() => <Register/>}/>
      </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
