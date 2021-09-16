import React from "react";
import CountryList from "./CountryList";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryUi from "./CountryUi";
import CountryForm from "./CountryForm";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={CountryList} />
          <Route path="/countryui" component={CountryUi} />
          <Route path="/countryform" component={CountryForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
