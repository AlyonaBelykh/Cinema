import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import {api} from '../api';
import {Popular} from './Popular';
import './Paginate.css';

const popularMoviePath = '/movie/popular';

export  class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPageNumber: 1,
      totalItems: 1,
      itemsPerPage: 10
    };
  };

  componentDidMount() {
    api(popularMoviePath)
      .then(apiResponse => {
        this.setState({
          data: apiResponse.data.results,
          currentPageNumber: apiResponse.data.page,
          totalItems: apiResponse.data.total_results,
          itemsPerPage: apiResponse.data.results.length
        });
      });
  }

  handleSelect(number) {
    api(popularMoviePath, '&page='+number)
      .then(apiResponse => {
        this.setState({
          data: apiResponse.data.results,
          currentPageNumber: apiResponse.data.page,
          totalItems: apiResponse.data.total_results,
          itemsPerPage: apiResponse.data.results.length
        });
      });
  }

  render() {
    let totalPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);
    return (
      <div>
        <Popular data={this.state.data}/>
        <Pagination
          first
          last
          maxButtons={4}
          bsSize="medium"
          items={totalPages}
          activePage={this.state.currentPageNumber}
          onSelect={this.handleSelect.bind(this)}/>
      </div>
    );
  }
}