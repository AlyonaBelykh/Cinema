import React from 'react';
import { connect } from 'react-redux';
import { Fetch } from './Fetch';
import { Video } from './Video';

@connect()
export class FetchVideo extends React.Component{
  render(){
    return(

      <Video/>

    )
  }
}