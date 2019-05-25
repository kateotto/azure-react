import { FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from "../actions";

const initialState = {
  entries: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload.data
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };
    default:
      return initialState;
  }
};
