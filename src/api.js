import axios from 'axios';
const endPoint = 'https://api.themoviedb.org/3';
const apikey = '?api_key=390c79d9aaa56ef88e655fca9bea6ff1';

export async function api(path, query='') {
    //const data= await axios.get(endPoint + path + apikey + query);
    return axios.get(endPoint + path + apikey + query);
}