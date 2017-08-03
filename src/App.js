import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fetch } from  './components/Fetch.js';
import { DescriptionMovie } from './components/DescriptionMovie.js';
import { DescriptionSerial } from './components/DescriptionSerial.js';
import { FavoriteCollection } from './components/FavoriteCollection.js';

@connect()
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Fetch}/>
          <Route path="/descriptionMovie/:id" component={DescriptionMovie}/>
          <Route path="/descriptionSerial/:id" component={DescriptionSerial}/>
          <Route path="/favorites" component={FavoriteCollection}/>
        </div>
      </Router>
    );
  }
}

export default App;
