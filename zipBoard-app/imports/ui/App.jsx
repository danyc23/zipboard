import { Meteor } from "meteor/meteor";
import React from "react";
import Login from "./Login";
import { useTracker } from "meteor/react-meteor-data";
import Dashboard from "./Dashboard";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();
  return (
    <div className="main">
      <div className="main">
        {user ? (
          <>
            <Dashboard logout={logout} />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};
