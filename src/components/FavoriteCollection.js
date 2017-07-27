import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
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
    let collection = _.uniq(values);
    let array = [];
    collection.forEach(item => {
      array.push(JSON.parse(item))
    });
    this.setState({data: array})
  }

  render() {
    return (
      <div>
        {
          this.state.data.map(item =>
            <div>
              <Link to={'/descriptionMovie/' + item.id}>
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <p>{item.title}</p>
            </div>
          )
        }
      </div>
    )
  }

}
