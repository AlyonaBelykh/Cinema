// import { createStore } from 'redux';
// import { VideoReducer } from 'reducers/Video.reducer';
//
// const reducer = combineReducers({
//   data: VideoReducer
// });
//
// const preloadedState = {
//   video: {
//     firstName: 'First'
//   }
// };
//
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//
// export const store = createStore(reducer, preloadedState, enhancer);
import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)