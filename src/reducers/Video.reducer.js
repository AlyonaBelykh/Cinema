export default function reducer(state={
  data: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH": {
      return {...state, fetching: true}
    }
    case "FETCH_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
      }
    }
  }

  return state
}
