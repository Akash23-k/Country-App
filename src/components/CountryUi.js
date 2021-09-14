import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { countryList } from "../actions";

const CountryUi = (props) => {
  useEffect(() => {
    props.countryList();
  }, []);

  const [country, setCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("id");

  const selectHandleChange = (e) => {
    setCountry(e.target.value);
    props.countries.map((countryObject) => {
      if (countryObject.id === country) {
        console.log(country, "result");
        setSelectedCountry({ selectedCountry });
        return country;
      }
    });
  };

  return (
    <div>
      <h4>Select Country from below dropdown and get the details</h4>
      <form className="dropdown-form">
        <label className="form-labels">Select Country:</label>
        <select className="select-opt" onChange={selectHandleChange}>
          {props.countries.map((country) => {
            return <option value={country.id}>{country.name}</option>;
          })}
        </select>
      </form>
      <div className="form-labels">Selected:{country}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { countries: Object.values(state.countries) };
};
export default connect(mapStateToProps, { countryList })(CountryUi);
