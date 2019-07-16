import React, { FunctionComponent } from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';


interface VariableRouteProps {
  variable: string;
}

interface VariableProps extends RouteConfigComponentProps<VariableRouteProps> {
}

export const Variable: FunctionComponent<VariableProps> = function Variable({ route, match }) {
  return (
    <div>
      Variable : {match.params.variable}
      {route && renderRoutes(route.routes)}
    </div>
  );
};
