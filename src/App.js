import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Fetch} from  './components/Fetch.js';
import {DescriptionMovie} from './components/DescriptionMovie.js';
import {DescriptionSerial} from './components/DescriptionSerial.js';
import {FavoriteCollection} from './components/FavoriteCollection.js';
import {Show} from './components/Show';

@connect()
class App extends React.Component {
  render() {

    {
      return (
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Fetch}/>
              <Route path="/video" component={Fetch}/>
              <Route path="/movie/:id" component={DescriptionMovie}/>
              <Route path="/tv/:id" component={DescriptionSerial}/>
              <Route path="/favorites" component={FavoriteCollection}/>
              <Show key="0"/>
            </div>
          </Router>


        </div>
      )
    }
  }


}

export default App;
