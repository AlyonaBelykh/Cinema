import React from 'react';
import {api} from '../api';
import {Video} from './Video.js';
const moviePath = '/movie/';
const img = 'https://image.tmdb.org/t/p/w500';
const apikey = '&apikey=ec6483bd';

export class DescriptionMovie extends React.Component {
  constructor(props) {
    super(props);
    this.searchByImbdId();
    this.state = {data: {}}
  }

  searchByImbdId() {
    const id = this.props.match.params.id;
    api(moviePath + id).then(result => {
      const imbdId = result.data.imdb_id;
      fetch('http://www.omdbapi.com/?i=' + imbdId + apikey)
        .then(response => response.json())
        .then(data => {
          this.setState({data: data})
        })
    });
  }

  render() {
    return (
      <div>
        <h1>Description</h1>
        <img src={this.state.data.Poster  }></img>
        <p>Title: {this.state.data.Title}</p>
        <p>Country: {this.state.data.Country}</p>
        <p>Actors: {this.state.data.Actors}</p>
        <p>Plot: {this.state.data.Plot}</p>
        <p>imdbRating: {this.state.data.imdbRating}</p>
        <Video id={this.props.match.params.id} path="/movie/"/>
      </div>
    )
  }
}
