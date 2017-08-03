import React from 'react';
import {Link} from 'react-router-dom';
import {Favorite} from './Favorite';
import './Fetch.css';
import {connect} from "react-redux";

const img = 'https://image.tmdb.org/t/p/w500/';

@connect()
export class Popular extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {
          this.props.data.map(item => {
             if (!item.name) {
              return (
                <figure>
                  <Link to={'/descriptionMovie/' + item.id} target="_blank">
                    <img src={img + item.poster_path} className="poster" alt=""></img>
                  </Link>
                  <Favorite id={item.id} show="movie"/>
                  <figcaption>{item.original_title}</figcaption>
                </figure>
              )
            } else {
              return (
                <figure>
                  <Link to={'/descriptionSerial/' + item.id} target="_blank">
                    <img src={img + item.poster_path} className="poster" alt=""></img>
                  </Link>
                  <Favorite id={item.id} show="serial"/>
                  <figcaption>{item.name}</figcaption>
                </figure>
              )
            }
          })
        }
      </div>
    )
  }
}
