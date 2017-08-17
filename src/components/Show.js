import React from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import './Show.css';

@connect((store) => ({
  data: store.data
}))

export class Show extends React.Component {
  constructor(){
    super();
    this.state={pause:false}
  }
  render() {
    if(!this.props.data.key){
      return (<p></p>)
    }else {
      return (
        <div  className={this.state.pause === false ? "right" : "hide"}>
        <ReactPlayer url={"https://www.youtube.com/embed/" + this.props.data.key}
                     playing
                     width="580px"
                     onPause={() => {
                       this.setState({pause:true})
                     }}
        />
        </div>
      )
    }
  }
}