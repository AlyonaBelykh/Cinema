import React, {Component} from 'react';
import {Pagination} from 'react-bootstrap';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css'
import {api} from '../api';
import {Popular} from './Popular';
import './Paginate.css';

const popularMoviePath = '/movie/popular';
const topRated = '/movie/top_rated';

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
    console.log('topRared',  index)
    if (index === 1) {
      api(topRated)
        .then(apiResponse => {
        console.log(apiResponse)
          this.setState({
            data: apiResponse.data.results,
            currentPageNumber: apiResponse.data.page,
            totalItems: apiResponse.data.total_results,
            itemsPerPage: apiResponse.data.results.length
          });
        })
    }else{
      this.handleSelect(1)
    }
  }

  handleSelect(number) {
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

  handleSelectRated(number){
    api(topRated, '&page=' + number)
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
            onSelect={this.handleSelect.bind(this)}/>
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
            onSelect={this.handleSelectRated.bind(this)}/>
        </TabPanel>
      </Tabs>
    );
  }
}