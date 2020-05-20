import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Setup from "./containers/Setup";

import Participant from "./containers/ParticipantSetup"
import Researcher from "./containers/ResearcherSetup"

import HealthSetup from "./containers/HealthSetup"

import NotFound from "./containers/NotFound";
export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    
    <Route exact path="/profile-setup" component={Setup}  />
    <Route path="/profile-setup/participant" exact component={Participant} />
    <Route path="/profile-setup/participant/health" exact component={HealthSetup} />
    <Route path="/profile-setup/researcher" exact component={Researcher} />
    <Route component={NotFound} />
    
    <AppliedRoute props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    
  </Switch>;

