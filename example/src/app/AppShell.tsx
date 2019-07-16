import React, { FunctionComponent } from 'react';

import './AppShell.css';


/**
 * Provides the top-level skeletal layout of the app.
 */
export const AppShell: FunctionComponent<{}> = function AppShell({ children }) {
  return (
    <div className="app-shell">
      <div>App Shell</div>
      {children}
    </div>
  );
};
