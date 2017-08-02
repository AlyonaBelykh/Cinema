import React from 'react';
import {Link} from 'react-router-dom';
import {Favorite} from './Favorite';
import './Fetch.css';
const img = 'https://image.tmdb.org/t/p/w500/';

export class Popular extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {
          this.props.data.map(item =>
            <figure>
              <Link to={'/descriptionMovie/' + item.id} target="_blank">
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <Favorite id={item.id} />
              <figcaption>{item.original_title}</figcaption>
            </figure>
          )
        }
      </div>
    )
  }
}
