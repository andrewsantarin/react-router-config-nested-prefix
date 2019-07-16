import React, { FunctionComponent } from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';


export const Test: FunctionComponent<RouteConfigComponentProps> = function Test({ route }) {
  return (
    <div>
      Test
      {route && renderRoutes(route.routes)}
    </div>
  );
};
