import React from 'react';
import { connect } from 'react-redux';
import { api } from '../api';
import './Video.css';


function fetchData() {
  return function(dispatch) {
    dispatch({type: "FETCH"});

    api(this.props.path + this.props.id+'/videos')
      .then((response) => {
      console.log('hello world', response)
        dispatch({type: "FETCH_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_REJECTED", payload: err})
      })
  }
}

@connect((store) => {
  return {
    data: store.data
  };
})
export class Video extends React.Component {
  constructor(props){
    super(props);
    this.loadVideo();
    this.state = {data: []}
  }

  loadVideo(){
    this.props.dispatch(fetchData())
  }

  render(){
    return (
      <div>
        {
          this.state.data.map(item =>
          <iframe width="420" height="315" src ={"https://www.youtube.com/embed/" + item.key} allowFullScreen title="trailer"></iframe>
          )
        }
      </div>
    )
  }
}