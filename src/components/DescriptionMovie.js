import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { api } from '../api';
import { FindIt } from './FindIt';
import { Favorite } from  './Favorite';
import {Video} from './Video'
import './DescriptionMovie.css';
const moviePath = '/movie/';
const img = 'https://image.tmdb.org/t/p/w500';
//const apikey = '&apikey=c6c0355';

@connect()
export class DescriptionMovie extends React.Component {
  constructor(props) {
    super(props);
    this.searchByImbdId();
    this.state = {imbdApi: {}, movieDbApi: {}}
  }

  searchByImbdId() {
    const id = this.props.match.params.id;
    api(moviePath + id).then(result => {
      // const imbdId = result.data.imdb_id;
      // fetch('http://www.omdbapi.com/?i=' + imbdId + apikey)
      //   .then(response => response.json())
      //   .then(data => {
          this.setState({movieDbApi:result.data})
       // })
    });
  }

  render() {
    return (
      <div>
        <Link to="/video" id="RootNode" >Start Page</Link>
        <h1>Description</h1>
        <img src={img+this.state.movieDbApi.poster_path} alt=""></img>
        <Favorite id={this.props.match.params.id} show="movie"/>
        <p>Title: {this.state.movieDbApi.title}</p>
        <p>Released Date: {this.state.movieDbApi.release_date}</p>
        <p>Country: {(this.state.movieDbApi.production_countries|| []).map(country=> country.name).join(', ')}</p>
        <p>Genres: {(this.state.movieDbApi.genres || []).map(genre=>genre.name).join(', ')}</p>
        <p>Plot: {this.state.movieDbApi.overview}</p>
        <p>Kinopoisk Rating: {this.state.movieDbApi.vote_average}</p>
        <p>Kinopoisk Votes:{this.state.movieDbApi.vote_count}</p>
        <Video/>
        <a href={this.state.movieDbApi.homepage} id="collection">Homepage</a>
        <FindIt title={this.state.movieDbApi.title}/>
      </div>
    )
  }
}
