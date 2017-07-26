import React from 'react';
import {Select} from './SearchingSelectBox';
import {Popular} from  './Popular';

export class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
    <div>
      <h1>Search Video</h1>
      <h3>{this.state.value}</h3>
      <form onSubmit={this.props.onSubmit}>
        <label>
          Title:
          <input  id="film" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Select/>
        <input  type="submit" value="Submit"/>
      </form>
      <Popular/>
    </div>
    );
  }
}

