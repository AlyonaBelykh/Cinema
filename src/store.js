import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from "redux-logger";
import thunk from 'redux-thunk';

import promise from "redux-promise-middleware";

import reducer from "./reducers"

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//const middleWare = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store