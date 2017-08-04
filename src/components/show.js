import React from 'react';
import {connect} from 'react-redux';

@connect((store) => ({
  key: store.key
}))
export class Show extends React.Component {
  render() {
    return (
    <iframe width="420" height="315" src={"https://www.youtube.com/embed/" + this.props.key} allowFullScreen
            title="trailer"></iframe>
    )
  }
}