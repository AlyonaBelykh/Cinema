import React from 'react';
import './Fetch.css';
import {api} from '../api';
import favorites from './favorites.png';
import infavorites from './infavorites.png';
const moviePath = '/movie/';
const serialPath = '/tv/';

export class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', favorite: false};
  }

  componentDidMount() {
    let id = this.props.id;
    let url = this.props.show === 'movie' ? moviePath : serialPath;
    api(url + id).then(result => {
      this.setState({
        title: result.data.title || result.data.name,
        data: result.data,
        favorite: localStorage.getItem(result.data.title || result.data.name) !== null
      });
    })
  }

  componentWillReceiveProps(nextProps) {
    let id = nextProps.id;
    let url = this.props.show === 'movie' ? moviePath : serialPath;
    api(url + id).then(result => {
      this.setState({
        title: result.data.title || result.data.name,
        data: result.data,
        favorite: localStorage.getItem(result.data.title || result.data.name) !== null
      });
    });
  }

  toggleFavorite(title, data) {
    if (localStorage.getItem(title) && this.state.favorite === true) {
      localStorage.removeItem(title);
      this.setState({favorite: false});
    } else {
      this.setState({favorite: true});
      localStorage.setItem(title, JSON.stringify(data));
    }
  }

  render() {
    return (
      <button onClick={() => this.toggleFavorite(this.state.title, this.state.data)} className="star">
        {
          this.state.favorite ?
            <img src={infavorites} className="favorite" alt=""></img>
            : <img src={favorites} className="favorite" alt=""></img>
        }
      </button>
    )
  }
}
