import React from 'react';
import {connect} from 'react-redux';
import {api} from '../api';
import './Video.css';

@connect((store) => ({
  data: store.data
}))
export class Video extends React.Component {
  constructor(){
    super()
    const path = document.location.href.split('/')[3]
    const linkId = document.location.href.split('/')[4];
    console.log(path)
    this.state={linkId:linkId, path:path}

  }

  loadVideo() {
    const linkForApi = window.location.pathname;




    this.props.dispatch(fetchData(linkForApi))
  }

  render() {
    const {data: {videos}} = this.props;
    if ((!videos || !videos.length)) {
      if ((window.location.pathname === '/video' || window.location.pathname === '/'+this.state.path+'/'+this.state.linkId)) {
        return <button onClick={this.loadVideo.bind(this)} id="collection">Trailer</button>
      }
    }

    const mappedData = videos.map(item =>
      <iframe width="420" height="315" src={"https://www.youtube.com/embed/" + item.key} allowFullScreen
              title="trailer"></iframe>
    );

    return (
      <div>
        {mappedData}
      </div>
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
