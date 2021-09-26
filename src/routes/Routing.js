import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { SignInView } from "../view/SignInView";
import { UserContext } from "../shared/global/provider/UserProvider";
import { LoansView } from "../view/LoansView";
import RoutingPath from "./RoutingPath";

export const Routing = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const blockRouteIfAuthenticated = (navigateToView) => {
    return authenticatedUser ? HomeView : navigateToView;
  };

  const blockRouteIfNotAuthenticated = (navigateToView) => {
    return !authenticatedUser ? SignInView : navigateToView;
  };

  const checkIfUserIsAuthenticatedInBrowser = () => {
    setAuthenticatedUser(localStorage.getItem("username"));
  };

  useEffect(() => {
    checkIfUserIsAuthenticatedInBrowser();
  }, []);
  return (
    <Router>
      {props.children}
      <Switch>
        <Route
          exact
          path={RoutingPath.signInView}
          component={blockRouteIfAuthenticated(SignInView)}
        />
        <Route
          exact
          path={RoutingPath.loansView}
          component={blockRouteIfNotAuthenticated(LoansView)}
        />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
