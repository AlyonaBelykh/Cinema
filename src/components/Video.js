import React from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
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
    this.state = {linkId: linkId, path: path, currentlyPlay: ''};
  }

  loadVideo() {
    const linkForApi = window.location.pathname;
    this.props.dispatch(fetchData(linkForApi))
  }

  show(key) {
    this.setState({currentlyPlay: key});
    this.props.dispatch({type: "KEY", payload: key});
    this.props.dispatch({type: "BUTTONHIDE", payload: true})
  }

  hide() {
    this.props.dispatch({type: "HIDE", payload: true})
  }

  render() {
    const {data: {videos}} = this.props;
    if ((!videos || !videos.length)) {
      if ((window.location.pathname === '/video' || window.location.pathname === '/' + this.state.path + '/' + this.state.linkId)) {
        return <button onClick={this.loadVideo.bind(this)} id="collection">Trailer</button>
      }
    }

    const mappedData = videos.map((item, i) =>

      <div ref="h" className={this.state.currentlyPlay === item.key ? 'fullScreen' : 'default'}>

          <ReactPlayer url={"https://www.youtube.com/embed/" + item.key}
                       onPlay={() => {
                         this.show(item.key)
                       }}

                       volume = {0}
                       />
        {
          this.props.data.bhide ?
           <button  className="hideB" onClick={() => this.hide()}>HIDE</button> :
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
