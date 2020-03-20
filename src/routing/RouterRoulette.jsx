import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { ROUTER_URLS } from "../shared/constants";
import { routes } from "./routes";
import { NotFound } from "../core/pages";

export function RouteRoulette() {
  return (
    <Router basename={ROUTER_URLS.BASE_URL}>
        <Switch>
          { routes.map((route, i) => 
            <Route key={i} {...route} />
          )}
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}
