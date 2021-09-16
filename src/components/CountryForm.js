import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { createCountry } from "../actions";

const CountryForm = (props) => {
  const [countryName, setCountryName] = useState();
  const [countryRank, setCountryRank] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      name: countryName,
      rank: countryRank,
    };
    props.createCountry(formValues);

    setCountryName("");
  };

  return (
    <div>
      <h4>Country Details Form</h4>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">Country Name:</label>
          <input
            type="text"
            name="countryName"
            value={countryName}
            placeholder="Enter Country Name"
            className="input-box"
            onChange={(e) => setCountryName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Country Rank:</label>
          <input
            type="text"
            name="countryRank"
            value={countryRank}
            placeholder="Enter Country Rank"
            className="input-box"
            onChange={(e) => setCountryRank(e.target.value)}
          />
        </div>
        <div className="btn-class">
          <button className="submit-btn" type="submit">
            Submit
          </button>
          <button className="back-btn">
            <Link to="/" className="Link">
              Back
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { countries: Object.values(state.countries) };
};
export default connect(mapStateToProps, { createCountry })(CountryForm);
