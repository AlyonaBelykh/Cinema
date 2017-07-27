import React from 'react';
import {api} from '../api';
import {Video} from './Video.js';
import './DescriptionSerial.css';
const serialPath = '/tv/';
const img = 'https://image.tmdb.org/t/p/w500';

export class DescriptionSerial extends React.Component {
  constructor(props) {
    super(props);
    this.searchBySerialId();
    this.state = {data: {}}
  }

  searchBySerialId() {
    const id = this.props.match.params.id;
    api(serialPath + id).then(result => {
      this.setState({data: result.data})
    });
  }

  render() {
    return (
      <div>
        <h1>Description</h1>
        <img src={img+this.state.data.poster_path} alt=""></img>
        <p>Title: {this.state.data.name}</p>
        <p>First air date: {this.state.data.first_air_date}</p>
        <p>Last air date: {this.state.data.last_air_date}</p>
        <p>Plot: {this.state.data.overview}</p>
        <Video id={this.props.match.params.id} path='/tv/'/>
        <a href={this.state.data.homepage}>Homepage</a>
      </div>
    )
  }
}

