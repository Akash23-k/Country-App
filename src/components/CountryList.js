import React from "react";
import { connect } from "react-redux";
import { countryList } from "../actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CountryList = (props) => {
  useEffect(() => {
    props.countryList();
  }, []);

  const renderList = () => {
    return props.countries.map((country) => {
      return (
        <tr>
          <td>{country.id}</td>
          <td>{country.name}</td>
          <td>{country.rank}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h4> Country Details </h4>
      <table className="country-table">
        <tr>
          <th>Country Id</th>
          <th>Country Rank</th>
          <th>Country Name</th>
        </tr>
        {renderList()}
      </table>
      <button className="country-btn">
        <Link to="/countryui" className="Link">
          Go to Country UI
        </Link>
      </button>
      &nbsp; &nbsp;
      <button className="country-btn">
        <Link to="/countryform" className="Link">
          Add Country
        </Link>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { countries: Object.values(state.countries) };
};
export default connect(mapStateToProps, { countryList })(CountryList);
