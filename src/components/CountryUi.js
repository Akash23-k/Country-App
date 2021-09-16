import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { countryList } from "../actions";
import { Link } from "react-router-dom";

const CountryUi = (props) => {
  useEffect(() => {
    props.countryList();
  }, []);

  const [country, setCountry] = useState();
  const [selectedCountry, setSelectedCountry] = useState({});

  const handleSubmit = (e) => {
    props.countries.map((countryObject) => {
      let countryId = parseInt(country);
      if (countryObject.id === countryId) {
        setSelectedCountry(countryObject);
      }
      return countryObject;
    });
  };
  const selectHandleChange = (e) => {
    setCountry(e.target.value);
  };
  console.log(selectedCountry, "test");
  return (
    <div>
      <h4>Select Country from below dropdown and get the details.</h4>
      <label className="form-labels">Select Country:</label>
      <select className="select-opt" onChange={selectHandleChange}>
        {props.countries.map((country) => {
          return <option value={country.id}> {country.name} </option>;
        })}
      </select>
      <button className="submit-btn" onClick={handleSubmit}>
        Search
      </button>

      <div className="country-details">
        <div className="form-labels">Country Name: {selectedCountry.name}</div>
        <div className="form-labels">
          Continent Name: {selectedCountry.continent}
        </div>
        <div className="form-labels">Country Flag: {selectedCountry.flag}</div>
        <div className="form-labels">Country Rank: {selectedCountry.rank}</div>
        <div className="form-labels">Country Id: {selectedCountry.id}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { countries: Object.values(state.countries) };
};
export default connect(mapStateToProps, { countryList })(CountryUi);
