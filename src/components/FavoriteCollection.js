import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import './FavoriteCollection.css';
const img = 'https://image.tmdb.org/t/p/w500';

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
              <Link to={'/descriptionMovie/' + item.id}>
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <p>{item.title}</p>
            </div>
            :
            <div className="serial">
              <Link to={'/descriptionSerial/' + item.id}>
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <p>{item.name}</p>
            </div>
          )
        }
      </div>
    )
  }
}
