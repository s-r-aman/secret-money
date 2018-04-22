import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS
} from './../utils/actionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return { ...state, isFetching: true };

    case FETCHING_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: action.err
      };

    case FETCHING_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err
      };
    default:
      return state;
  }
};
