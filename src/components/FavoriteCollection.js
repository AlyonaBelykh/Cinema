import React from 'react';
import {Link} from 'react-router-dom';
import {Favorite} from './Favorite';
import _ from 'lodash';
import './FavoriteCollection.css';
import {connect} from "react-redux";

const img = 'https://image.tmdb.org/t/p/w500';

@connect()
export class FavoriteCollection extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {data: []};
  }

  componentDidMount() {
    this.showCollection();
  }

  showCollection() {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    //localStorage.clear();

    let collection = _.uniq(values);
    let array = [];
    collection.forEach(item => {
      array.push(JSON.parse(item))
    });
    this.setState({data: array})
  }

  del() {
    localStorage.clear();
    this.showCollection();
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.del()}} id="delete">Delete All</button>
        {
          this.state.data.map(item =>
          !(item.name)?
            <div className="movie">
              <Link to={'/descriptionMovie/' + item.id} target="_blank">
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <Favorite id={item.id} show="movie"/>
              <p>{item.title}</p>
            </div>
            :
            <div className="serial">
              <Link to={'/descriptionSerial/' + item.id} target="_blank">
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <Favorite id={item.id} show="serial"/>
              <p>{item.name}</p>
            </div>
          )
        }
      </div>
    )
  }
}
