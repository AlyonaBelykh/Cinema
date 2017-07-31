import React from 'react';

export class FindIt extends React.Component{

  getSearchLink() {
    const name = this.props.title;
    let values = name.split(' ').filter((v)=> v!=='');
    values = values.length > 1 ?
        values.join('%20')
      : values;
    window.location.href = 'https://rutracker.org/forum/tracker.php?nm='+values;
   }

  render() {
    return(
      <button onClick={()=>this.getSearchLink()} id="collection">Find in Tracker</button>
    )
  }
}
