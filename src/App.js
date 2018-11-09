import React, { Component } from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Status from "./components/Status";
import Imperial from './audio/imperial.mp3'

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
              <Navbar/>
              <audio src={Imperial} autoPlay loop></audio>
          <Switch>
            <Route exact path='/' component={Header}/>
            <Route path='/status' component={Status}/>
          </Switch>
            <Footer/>
          </div>
        </HashRouter>
    );
  }
}

export default App;
