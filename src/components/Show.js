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
    this.state={pause:false}
  }

  render() {
    if(!this.props.data.key || this.props.data.hide === false){
      return (<p></p>)
    }else  {
      return (
        <div className={this.state.pause === false ? "right" : "right"}>

        <ReactPlayer url={"https://www.youtube.com/embed/" + this.props.data.key}
                     controls="true"
                     playing
                     onPause={() => {
                       this.setState({pause:true})
                     }}
        />
          <button className="hideB" onClick={()=> this.props.dispatch({type: "HIDE", payload: false}) }>Close</button>
        </div>
      )
    }
  }
}