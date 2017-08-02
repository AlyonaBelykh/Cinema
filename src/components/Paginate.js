import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css'
import {api} from '../api';
import {Popular} from './Popular';
import './Paginate.css';

const popularMoviePath = '/movie/popular';
const topRatedMovie = '/movie/top_rated';
const popularTvPath = '/tv/popular';
const topRatedTv = '/tv/top_rated';

export class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPageNumber: 1,
      totalItems: 1,
      itemsPerPage: 10,
      index: 0
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

  topRared(index){
    if (index === 1) {
      api(topRatedMovie)
        .then(apiResponse => {
          this.setState({
            data: apiResponse.data.results,
            currentPageNumber: apiResponse.data.page,
            totalItems: apiResponse.data.total_results,
            itemsPerPage: apiResponse.data.results.length
          });
        })
    }else if(index === 2) {
      api(popularTvPath)
        .then(apiResponse => {
          this.setState({
            data: apiResponse.data.results,
            currentPageNumber: apiResponse.data.page,
            totalItems: apiResponse.data.total_results,
            itemsPerPage: apiResponse.data.results.length
          });
        })
    }else if(index === 3){
      api(topRatedTv)
        .then(apiResponse => {
          this.setState({
            data: apiResponse.data.results,
            currentPageNumber: apiResponse.data.page,
            totalItems: apiResponse.data.total_results,
            itemsPerPage: apiResponse.data.results.length
          });
        })
    }else {
      this.handleSelectMovie(1)
    }
  }

  handleSelectMovie(number) {
    api(popularMoviePath, '&page=' + number)
      .then(apiResponse => {
        this.setState({
          data: apiResponse.data.results,
          currentPageNumber: apiResponse.data.page,
          totalItems: apiResponse.data.total_results,
          itemsPerPage: apiResponse.data.results.length
        });
      });
  }

  handleSelectRatedMovie(number){
    api(topRatedMovie, '&page=' + number)
      .then(apiResponse => {
        this.setState({
          data: apiResponse.data.results,
          currentPageNumber: apiResponse.data.page,
          totalItems: apiResponse.data.total_results,
          itemsPerPage: apiResponse.data.results.length
        });
      });
  }

  handleSelectSerial(number) {
    api(popularTvPath, '&page=' + number)
      .then(apiResponse => {
        this.setState({
          data: apiResponse.data.results,
          currentPageNumber: apiResponse.data.page,
          totalItems: apiResponse.data.total_results,
          itemsPerPage: apiResponse.data.results.length
        });
      });
  }

  handleSelectRatedSerial(number) {
    api(topRatedTv, '&page=' + number)
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
    return (
      <Tabs defaultIndex={0} onSelect={(index)=>this.topRared(index)}>
        <TabList>
          <Tab>Popular Movies</Tab>
          <Tab>Top Rated Movies</Tab>
          <Tab>Popular TV</Tab>
          <Tab>Top Rated TV</Tab>
        </TabList>

        <TabPanel>
          <Popular data={this.state.data}/>
          <Pagination
            first
            last
            next
            prev
            maxButtons={4}
            bsSize="medium"
            items={Math.ceil(this.state.totalItems / this.state.itemsPerPage)}
            activePage={this.state.currentPageNumber}
            onSelect={this.handleSelectMovie.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <Popular data={this.state.data}/>
          <Pagination
            first
            last
            next
            prev
            maxButtons={4}
            bsSize="medium"
            items={Math.ceil(this.state.totalItems / this.state.itemsPerPage)}
            activePage={this.state.currentPageNumber}
            onSelect={this.handleSelectRatedMovie.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <Popular data={this.state.data}/>
          <Pagination
            first
            last
            next
            prev
            maxButtons={4}
            bsSize="medium"
            items={Math.ceil(this.state.totalItems / this.state.itemsPerPage)}
            activePage={this.state.currentPageNumber}
            onSelect={this.handleSelectSerial.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <Popular data={this.state.data}/>
          <Pagination
            first
            last
            next
            prev
            maxButtons={4}
            bsSize="medium"
            items={Math.ceil(this.state.totalItems / this.state.itemsPerPage)}
            activePage={this.state.currentPageNumber}
            onSelect={this.handleSelectRatedSerial.bind(this)}/>
        </TabPanel>

      </Tabs>
    );
  }
}