import React, { Fragment } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';


/**
 * Creates route children.
 *
 * @export
 *
 * @param {RouteConfigComponentProps} props Standard `react-router-config` component props, specifically the `route` tree prop.
 *
 * @returns
 */
export const RouteConfigComponent = function RouteConfigComponent(props: RouteConfigComponentProps) {
  const { route } = props;

  return (
    <Fragment>
      {route && renderRoutes(route.routes)}
    </Fragment>
  );
};
