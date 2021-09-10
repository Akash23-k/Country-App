import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { countryList } from "../actions";

const CountryUi = (props) => {
  useEffect(() => {
    props.countryList();
  }, []);

  const [country, setCountry] = useState([]);

  const selectHandleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h4>Select Country from below dropdown and get the details</h4>
      <form className="dropdown-form" onSubmit={handleSubmit}>
        <label className="form-labels">Select Country:</label>
        <select className="select-opt" onChange={selectHandleChange}>
          {props.countries.map((country) => {
            return <option value={country}>{country.name}</option>;
          })}
        </select>
        <button type="submit" className="submit-btn" value="Submit">
          Search
        </button>
      </form>
      {country.id}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { countries: Object.values(state.countries) };
};
export default connect(mapStateToProps, { countryList })(CountryUi);
