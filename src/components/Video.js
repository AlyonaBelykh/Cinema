import React from 'react';
import {connect} from 'react-redux';
import {api} from '../api';
import './Video.css';

@connect((store) => ({
    data: store.data
}))
export class Video extends React.Component {
  loadVideo() {
    this.props.dispatch(fetchData(this.props))
  }

  render() {

    const {data: {videos}} = this.props;
    console.log('RENDER AAAAA', this.props.data);

    if (!videos || !videos.length) {
      return <button onClick={this.loadVideo.bind(this)}>load data</button>
    }

    const mappedData =  videos.map(item =>
      <iframe width="420" height="315" src={"https://www.youtube.com/embed/" + item.key} allowFullScreen
              title="trailer"></iframe>
    );

    return (
      <div>
        {
          mappedData

        }
      </div>
    )
  }
}
function fetchData(props) {
  return function (dispatch) {

    api(props.path + props.id + '/videos')
      .then((response) => {
        dispatch({type: "FETCH_FULFILLED", payload: response.data.results})
      })
      .catch((err) => {
        dispatch({type: "FETCH_REJECTED", payload: err})
      })
  }
}
