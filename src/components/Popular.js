import React from 'react';
import {Link} from 'react-router-dom';
import {Favorite} from './Favorite';
import './Fetch.css';
const img = 'https://image.tmdb.org/t/p/w500/';

export class Popular extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {data: [], id:''};
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.data !== this.props.data) {
  //      nextProps.data.map(item => {
  //       console.log(item.id)
  //        this.setState({ data: nextProps.data, id:item.id });
  //     })
  //
  //   }
  //
  // }
  //{/*componentDidUpdate(prevState, props) {*/}
  //   console.log(prevState, this.props)
  //   if (prevState !== this.props) {
  //     const array =  this.props.data;
  //     this.setState({result:array})
  //
  //     // let result = [];
  //     // array.map(item => result.push(this.setState({result:item.id})));
  //   } else {
  //     console.log('^^')
  //   }
  // }

  render() {
    return (
      <div>
        {
          this.props.data.map(item =>
            <figure>
              <Link to={'/descriptionMovie/' + item.id}>
                <img src={img + item.poster_path} className="poster" alt=""></img>
              </Link>
              <Favorite id={item.id}/>
              <figcaption>{item.original_title}</figcaption>
            </figure>
          )
        }
      </div>
    )
  }
}
