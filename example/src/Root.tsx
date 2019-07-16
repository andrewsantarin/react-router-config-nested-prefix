import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './Root.css';

import { rootRoutes } from 'root.routes';


export const Root = function Root() {
  return (
    <BrowserRouter>
      {renderRoutes(rootRoutes)}
    </BrowserRouter>
  );
};
