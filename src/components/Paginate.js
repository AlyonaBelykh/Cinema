import React from 'react';
import _ from 'lodash';
import {api} from  '../api';
import Pagination from "../components/Pagination";

const popularMoviePath = '/movie/popular';

export class Paginate extends React.Component {
  constructor() {
    super();
    var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });
    console.log("NEED",exampleItems)
    // an example array of items to be paged
    // var exampleItems = [];
    // var array = new Array();
    // api(popularMoviePath).then(response => {
    //   _.range(1, 3).map(i => {
    //     api(popularMoviePath,'&page='+i).then(pagesResults => {
    //       pagesResults.data.results.map(res  => {
    //         return array.push({id: res.id ,title: res.title});
    //       })
    //     })
    //   });
    // })
    //
    // console.log(array.length)
    // array.map((e,i)=>{
    //   exampleItems.push({idx:i, item: e});
    // })
    // console.log("HAVE",exampleItems)
    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>React - Pagination Example with logic like Google</h1>
            {this.state.pageOfItems.map(item =>
              <div key={item.id}>{item.name}</div>
            )}
            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
          </div>
        </div>
        <hr/>

      </div>
    );
  }
}
