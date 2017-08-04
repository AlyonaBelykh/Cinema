import React from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { FindIt } from './FindIt';
import { Favorite } from  './Favorite';

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
        <Link to="/video"  id="collection">Start Page</Link>
        <h1>Description</h1>
        <img src={img+this.state.data.poster_path} alt=""></img>
        <Favorite id={this.props.match.params.id} show="serial"/>
        <p>Title: {this.state.data.name}</p>
        <p>First air date: {this.state.data.first_air_date}</p>
        <p>Last air date: {this.state.data.last_air_date}</p>
        <p>Plot: {this.state.data.overview}</p>
        <a href={this.state.data.homepage} id="collection" className="link">Homepage</a>
        <FindIt title={this.state.data.name}/>
      </div>
    )
  }
}

