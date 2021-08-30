import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";

Meteor.startup(() => {
  render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>,
    document.getElementById("react-target")
  );
});
