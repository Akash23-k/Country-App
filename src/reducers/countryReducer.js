import {
  FETCH_COUNTRY,
  FETCH_COUNTRYLIST,
  INSERT_COUNTRY,
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COUNTRYLIST:
      return [...action.payload];
    case FETCH_COUNTRY:
      return [...action.payload];
    case INSERT_COUNTRY:
      return { ...action.payload };
    default:
      return state;
  }
};
