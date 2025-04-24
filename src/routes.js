import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ContentLibrary from './pages/ContentLibrary';
import Analytics from './pages/Analytics';
import AudienceInsights from './pages/AudienceInsights';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/content-library" component={ContentLibrary} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/audience-insights" component={AudienceInsights} />
      <Route path="/profile" component={Profile} />
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export default AppRoutes;