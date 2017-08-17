export default function reducer(state = {
  videos: [],
  fetching: false,
  fetched: false,
  error: null,
  key: ''
}, action) {

  switch (action.type) {
    case "FETCH": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        videos: action.payload
      }
    }
    case "KEY": {
      return {
        ...state,
        key: action.payload
      }
    }
  }
  return state
}
