import React from 'react';
import './Fetch.css';
import {api} from '../api';
const moviePath = '/movie/';

export class Favorite extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {title: '', favorite: false};
  }

  componentDidMount() {
    this.getFavorite();
  }

  getFavorite(){
    const id = this.props.id;
    api(moviePath + id).then(result => {
      this.setState({
        title: result.data.title,
        data: result.data,
        favorite: localStorage.getItem(result.data.title) !== null
      });
    });
  }

  addToFavorite(title, data) {
    this.setState({favorite: true});
    localStorage.setItem(title, JSON.stringify(data));
  }

  render(){
    if (this.state.title) {
      console.log(localStorage.getItem(this.state.title), this.state.title)
    }
    return(
      <button onClick={() => this.addToFavorite(this.state.title, this.state.data)} className="star">
        {
          this.state.favorite ?
            <img src="infavorites.png" className="favorite" alt=""></img>
            : <img src="favorites.png" className="favorite" alt=""></img>
        }
      </button>
    )
  }
}
