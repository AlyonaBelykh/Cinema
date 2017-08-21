import React from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import { findDOMNode } from 'react-dom';
import {api} from '../api';
import './Video.css';

@connect((store) => ({
  data: store.data
}))
export class Video extends React.Component {
  constructor() {
    super();
    const path = document.location.href.split('/')[3];
    const linkId = document.location.href.split('/')[4];
    this.state = {linkId: linkId, path: path, currentlyPlay: '', played: 0, playing:false};
  }

  loadVideo() {
    const linkForApi = window.location.pathname;
    this.props.dispatch(fetchData(linkForApi))
  }

  show(key) {
    this.setState({currentlyPlay: key, playing:true});
    this.props.dispatch({type: "KEY", payload: key});
    this.props.dispatch({type: "BUTTONHIDE", payload: true})

  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value)})
  }

  onProgress = state => {
    if (!this.state.seeking) {
      this.setState(state)
    }
    this.props.dispatch({type: "TIME", payload: this.state.played})
  }

  hide() {
    this.props.dispatch({type: "HIDE", payload: true})
    this.setState( {playing:false} );
  }

  render() {
    const {data: {videos}} = this.props;
    if ((!videos || !videos.length)) {
      if ((window.location.pathname === '/video' || window.location.pathname === '/' + this.state.path + '/' + this.state.linkId)) {
        return <button onClick={this.loadVideo.bind(this)} id="collection">Trailer</button>
      }
    }

    const mappedData = videos.map((item, i) =>

      <div  className={this.state.currentlyPlay === item.key ? 'fullScreen' : 'default'}>

          <ReactPlayer url={"https://www.youtube.com/embed/" + item.key}
                       ref={player => { this.player = player }}
                       controls="true"
                       onPlay={() => {
                         this.show(item.key)
                       }}
                       playing ={ this.state.currentlyPlay === item.key ? this.state.playing : false}
                       onProgress={this.onProgress}
                       />
            <input
              type='range' min={0} max={1} step='any'
              value={this.state.played}
              className="hide"
              onChange={this.onSeekChange}
            />

        {
          this.props.data.bhide && this.state.currentlyPlay === item.key ?
           <button  className= "hideB"  onClick={() => this.hide()}>Minimize</button> :
          <p></p>
         }

       </div>

    );

    return (
      <div> {mappedData} </div>
    )
  }
}

function fetchData(linkForApi) {
  return function (dispatch) {
    api(linkForApi + '/videos')
      .then((response) => {
        dispatch({type: "FETCH_FULFILLED", payload: response.data.results})
      })
      .catch((err) => {
        dispatch({type: "FETCH_REJECTED", payload: err})
      })
  }
}
