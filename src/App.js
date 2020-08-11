import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavbarContainer';
import Explore from './components/Explore';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register'
import { Segment } from 'semantic-ui-react';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="twelve wide column" style={{ padding: '1%', paddingBottom: '.5%'}}>
        <h1 className="ui header">
          <img src='https://image.flaticon.com/icons/svg/814/814513.svg'/>
          <div className="content">
              Splore
              <div className="sub header">Check out history near you!</div>
          </div>
        </h1>
      </div>
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
