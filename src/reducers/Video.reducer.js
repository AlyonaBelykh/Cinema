export default function reducer(state = {
  videos: [],
  key: '',
  fetching: false,
  fetched: false,
  error: null,
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
    // case "GET_ID": {
    //   console.log('action.payload id', action.payload)
    //   return {
    //     ...state,
    //     id: action.payload
    //   }
    // }
    // case "GET_PATH": {
    //   console.log('action.payload path', action.payload)
    //   return {
    //     ...state,
    //     path: action.payload
    //   }
    // }
    case "GET_KEY": {
      console.log('action.payload key', action.payload)
      return {
        ...state,
        key: action.payload
      }
    }
  }

  return state
}
