import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.scss';

import NavBar from './components/NavBar';

import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Sign from './components/Sign';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/sign">
            <Sign />
          </Route>
          <Route>
            <div>아시방 선택하쇼</div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
