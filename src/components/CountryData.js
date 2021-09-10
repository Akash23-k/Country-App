import React from "react";

const CountryCard = (props) => {
  return (
    <div>
      <div>Country Name:{props.name}</div>
      <div>Country Continent:{props.continent}</div>
      <div>Country Flag:{props.flag}</div>
      <div>Country Rank:{props.rank}</div>
      <div>Country Id:{props.id}</div>
    </div>
  );
};
export default CountryCard;
