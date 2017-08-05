import React from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {api} from '../api';
import './Video.css';

@connect((store) => ({
    data: store.data
}))
export class Video extends React.Component {
    constructor() {
        super();
        const path = document.location.href.split('/')[3];
        const linkId = document.location.href.split('/')[4];
        this.state = {linkId: linkId, path: path, className: '', playing: false, myClass: ''};
        //this.showMe();
    }

    loadVideo() {
        const linkForApi = window.location.pathname;
        this.props.dispatch(fetchData(linkForApi))
    }

    show(key) {
        console.log('state', this.state.playing, key)
        //console.log('refs',this.refs.player.player.container.className)
        if (this.state.playing) {
            this.setState({myClass: 'classToRight'})
            //this.refs.player.player.container.className='classToRight';
        } else {
            this.setState({myClass: 'classToHide'})
        }
    }

    render() {
        const {data: {videos}} = this.props;
        if ((!videos || !videos.length)) {
            if ((window.location.pathname === '/video' || window.location.pathname === '/' + this.state.path + '/' + this.state.linkId)) {
                return <button onClick={this.loadVideo.bind(this)} id="collection">Trailer</button>
            }
        }


        const mappedData = videos.map((item,i) =>
        <div >
            {console.log(item.key, i)}
           <div  className={this.state.myClass} >
               <ReactPlayer ref="player" url={"https://www.youtube.com/embed/" + item.key}
                         onPlay={() => {this.setState({playing: true, myClass:'classToRight'})}}
                         onPause={() => this.setState({playing: false, myClass:'classToHide'})}
                         onReady={()=> {this.setState({playing: false, myClass:'classToHide'})}}
           />
           </div>
        </div>
        );

        return (
                    <div> {mappedData} </div>
         )
    }
}

function fetchData(linkForApi) {
    return function (dispatch) {
        api(linkForApi + '/videos')
            .then((response) => {
                dispatch({type: "FETCH_FULFILLED", payload: response.data.results})
            })
            .catch((err) => {
                dispatch({type: "FETCH_REJECTED", payload: err})
            })
    }
}
