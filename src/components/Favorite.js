import React from 'react';
import {api} from '../api';
const moviePath = '/movie/';
const serialPath = '/tv/';

export class Favorite extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {data: null};
    this.getFavorite();
  }

  getFavorite(){
    api()
  }
}
