import React, { FunctionComponent } from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

import './App.css';

import { AppShell } from './AppShell';


export const App: FunctionComponent<RouteConfigComponentProps> = function App({ route }) {
  return (
    <AppShell>
      <div>App</div>
      {route && renderRoutes(route.routes)}
    </AppShell>
  );
};
