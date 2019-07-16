import { RouteConfigComponent, patchTreesRoutePath } from 'react-router-config-recursive-prefixer';

import { NotFound } from 'app/pages/NotFound';

import { Test } from 'app/examples/Test';
import { This } from 'app/examples/This';
import { Variable } from 'app/examples/Variable';
import { TestThis } from 'app/examples/TestThis';
import { That } from 'app/examples/That';

import { App } from 'app/App';


export const rootRoutes = patchTreesRoutePath([
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: RouteConfigComponent,
      },
      {
        path: '/test',
        component: Test,
        routes: [
          {
            path: '/this',
            component: TestThis,
          },
          {
            path: '/that',
            component: That,
          },
        ],
      },
      {
        path: '/this',
        component: RouteConfigComponent,
        routes: [
          {
            path: '/',
            exact: true,
            component: This,
          },
          {
            path: '/:variable',
            component: Variable,
            routes: [
              {
                path: '/this',
                component: This,
              },
              {
                path: '/that',
                component: That,
              },
            ],
          },
        ],
      },
      {
        path: '/that',
        component: That,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]);
