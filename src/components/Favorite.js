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

  toggleFavorite(title, data) {
    if(localStorage.getItem(title)&&this.state.favorite ===true) {
      localStorage.removeItem(title);
      this.setState({favorite: false});
    }else {
      this.setState({favorite: true});
      localStorage.setItem(title, JSON.stringify(data));
    }
  }

  render(){
    return(
      <button onClick={() => this.toggleFavorite(this.state.title, this.state.data)} className="star">
        {
          this.state.favorite ?
            <img src="infavorites.png" className="favorite" alt=""></img>
            : <img src="favorites.png" className="favorite" alt=""></img>
        }
      </button>
    )
  }
}
