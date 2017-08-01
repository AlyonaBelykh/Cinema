import React from 'react';
import {Link} from 'react-router-dom';
import {Search} from './Search';
import {Popular} from  './Popular';
import {Favorite} from './Favorite';
import './Fetch.css';
import {api} from '../api';
const searchMoviePath = '/search/movie';
const searchSerialPath = '/search/tv';

const img = 'https://image.tmdb.org/t/p/w500/';

export class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.state = {data: null}
  }

  loadData(event) {
    event.preventDefault();
    const film = event.target['film'].value;
    const selected = event.target['select'].value;
    const query = '&query=' + film;
    selected === 'TVSerial' ?
      api(searchSerialPath, query).then(data => {
        this.setState({data: data.data.results})
      })
        .catch(err => console.error(err))
      :
      api(searchMoviePath, query).then(data => {
        this.setState({data: data.data.results})
      })
        .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Search onSubmit={this.loadData}/>
        {
          !this.state.data ?
            <Popular/>
            :
          this.state.data.map(item => {
              if (!item.name) {
               return(
                 <figure>
                  <Link to={'/descriptionMovie/' + item.id}>
                    <img src={img + item.poster_path} className="poster" alt=""></img>
                  </Link>
                   <Favorite id={item.id}/>
                  <figcaption>{item.original_title}</figcaption>
                </figure>
               )
              } else {
                return(
                  <figure>
                    <Link to={'/descriptionSerial/' + item.id}>
                      <img src={img + item.poster_path} className="poster" alt=""></img>
                    </Link>
                  <figcaption>{item.name}</figcaption>
                </figure>
                )
              }
            }
          )
        }
      </div>
    )
  }
}

