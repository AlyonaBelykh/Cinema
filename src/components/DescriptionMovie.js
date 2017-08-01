import React from 'react';
import {api} from '../api';
import {Video} from './Video.js';
import {FindIt} from './FindIt';
import {Favorite} from  './Favorite';
import './DescriptionMovie.css';
const moviePath = '/movie/';
const img = 'https://image.tmdb.org/t/p/w500';
const apikey = '&apikey=c6c0355';

export class DescriptionMovie extends React.Component {
  constructor(props) {
    super(props);
    this.searchByImbdId();
    this.state = {imbdApi: {}, movieDbApi: {}}
  }

  searchByImbdId() {
    const id = this.props.match.params.id;
    api(moviePath + id).then(result => {
      console.log('result',result);
      const imbdId = result.data.imdb_id;
      fetch('http://www.omdbapi.com/?i=' + imbdId + apikey)
        .then(response => response.json())
        .then(data => {
          console.log('data',data)
          this.setState({imbdApi:data, movieDbApi:result.data})
        })
    });
  }

  render() {
    return (
      <div>
        <h1>Description</h1>
        <img src={img+this.state.movieDbApi.poster_path} alt=""></img>
        <Favorite id={this.props.match.params.id}/>
        <p>Title: {this.state.movieDbApi.title}</p>
        <p>Released Date: {this.state.imbdApi.Released}</p>
        <p>Country: {this.state.imbdApi.Country}</p>
        <p>Genres: {(this.state.movieDbApi.genres || []).map(genre=>genre.name).join(', ')}</p>
        <p>Actors: {this.state.imbdApi.Actors}</p>
        <p>Plot: {this.state.movieDbApi.overview}</p>
        <p>IMDB Rating: {this.state.imbdApi.imdbRating}</p>
        <p>IMDB Votes: {this.state.imbdApi.imdbVotes}</p>
        <p>Kinopoisk Rating: {this.state.movieDbApi.vote_average}</p>
        <p>Kinopoisk Votes:{this.state.movieDbApi.vote_count}</p>
        <Video id={this.props.match.params.id} path="/movie/"/>
        <a href={this.state.movieDbApi.homepage} id="collection">Homepage</a>
        <FindIt title={this.state.movieDbApi.title}/>
      </div>
    )
  }
}
