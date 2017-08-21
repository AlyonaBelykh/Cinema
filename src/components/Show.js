import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import './Show.css';

@connect((store) => ({
  data: store.data
}))

export class Show extends React.Component {
  constructor(){
    super();
    this.state={duration:0}
  }

  render() {
    if(!this.props.data.key || this.props.data.hide === false){
      return (<p></p>)
    }else  {
      return (
        <div className="right">

        <ReactPlayer url={"https://www.youtube.com/embed/" + this.props.data.key+'?t='+ Math.round(this.state.duration*this.props.data.time)}
                     controls="true"
                     playing
                     onDuration={duration => this.setState({ duration })}

        />

          <button className="hideB" onClick={()=> this.props.dispatch({type: "HIDE", payload: false}) }>Close</button>
        </div>
      )
    }
  }
}
// function format (seconds) {
//   const date = new Date(seconds * 1000)
//   const hh = date.getUTCHours()
//   const mm = date.getUTCMinutes()
//   const ss = pad(date.getUTCSeconds())
//
//   if (hh) {
//     return `${hh}:${pad(mm)}:${ss}`
//   }
//   return `${mm}:${ss}`
// }
//
// function pad (string) {
//   return ('0' + string).slice(-2)
// }