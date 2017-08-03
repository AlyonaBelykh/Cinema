import React from 'react';
import {connect} from "react-redux";

@connect()
export class Select extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {value: 'Movie'};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <select value={this.state.value} onChange={this.handleSelect} id='select'>
        <option value="Movie">Movie</option>
        <option value="TVSerial">Serial</option>
      </select>
    )
  }
}