import React from 'react';
import {Link} from 'react-router-dom';
import './Fetch.css';
import {api} from '../api';
const popularMoviePath = '/movie/popular';
const img = 'https://image.tmdb.org/t/p/w500/';

export class Popular extends React.Component {
  constructor(prop){
    super(prop);
    this.loadPopular();
    this.state = {data: []}
  }

  loadPopular() {
    api(popularMoviePath).then(response => {
      this.setState({data: response.data.results})
    })
  }

  render() {
    return(
      <div>
        {
          this.state.data.map(item =>
            <figure>
              <Link to={'/descriptionMovie/' + item.id}>
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <Link to={'/favorites'+item.id}>
                <img src="favorites.png" className="favorite" alt=""></img>
              </Link>
              <figcaption>{item.original_title}</figcaption>
            </figure>
          )
        }
      </div>
    )
  }
}
