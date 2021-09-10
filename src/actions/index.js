import countries from "../apis/countries";
import { FETCH_COUNTRYLIST, FETCH_COUNTRY } from "./types";

export const countryList = () => async (dispatch) => {
  const response = await countries.get("/countries");
  dispatch({ type: FETCH_COUNTRYLIST, payload: response.data });
};

export const country = (id) => async (dispatch) => {
  const response = await countries.get(`/countries/${id}`);
  dispatch({ type: FETCH_COUNTRY, payload: response.data });
};
