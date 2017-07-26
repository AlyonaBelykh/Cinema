import React from 'react';
import {api} from '../api';
import './Video.css';

export class Video extends React.Component {
  constructor(props){
    super(props);
    this.loadVideo();
    this.state = {data: []}
  }

  loadVideo(){
    api(this.props.path + this.props.id+'/videos').then(result =>{
      this.setState({data: result.data.results})
    })
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