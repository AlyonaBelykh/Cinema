import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Fetch} from  './components/Fetch.js';
import {DescriptionMovie} from './components/DescriptionMovie.js';
import {DescriptionSerial} from './components/DescriptionSerial.js';
import {Favorite} from './components/Favorite.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Fetch}/>
          <Route path="/descriptionMovie/:id" component={DescriptionMovie}/>
          <Route path="/descriptionSerial/:id" component={DescriptionSerial}/>
          <Route path="/favorites/:id" component={Favorite}/>
        </div>
      </Router>
    );
  }
}

export default App;
