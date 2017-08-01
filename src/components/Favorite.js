import React from 'react';
import './Fetch.css';
import {api} from '../api';
import favorites from './favorites.png';
import infavorites from './infavorites.png';
const moviePath = '/movie/';

export class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', favorite: false};
  }
  componentDidMount() {
    var id = this.props.id;
    api(moviePath + id).then(result => {
      this.setState({
        title: result.data.title,
        data: result.data,
        favorite: localStorage.getItem(result.data.title) !== null
      });
    });
  }

  componentWillReceiveProps(nextProps) {
      var id = nextProps.id;
      api(moviePath + id).then(result => {
        this.setState({
          title: result.data.title,
          data: result.data,
          favorite: localStorage.getItem(result.data.title) !== null
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
