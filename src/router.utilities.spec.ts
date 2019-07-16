import React, { FunctionComponent } from 'react';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { isNullOrUndefined } from 'util';

import { patchTreeRoutePath, patchTreesRoutePath } from './router.utilities';


function getDeepestRoutePath(tree: RouteConfig): RouteConfig['path'] {
  if (!isNullOrUndefined(tree.routes)) {
    return getDeepestRoutePath(tree.routes[0]);
  }

  return tree.path;
}

const DummyComponent: FunctionComponent<RouteConfigComponentProps> = function DummyComponent() {
  return React.createElement('div');
};

const tree: RouteConfig = {
  path: '/',
  component: DummyComponent,
  routes: [
    {
      path: '/person',
      component: DummyComponent,
      routes: [
        {
          path: '/andrew',
          component: DummyComponent,
        },
      ],
    },
  ],
};

describe('patchTreeRoutePath', () => {
  it('should exist', () => {
    expect(patchTreeRoutePath).toBeDefined();
  });

  it('does not mutate the original route tree object', () => {
    const oldTree = {
      ...tree,
    };

    const newTree = patchTreeRoutePath(oldTree);

    const oldRoutePath = getDeepestRoutePath(oldTree);
    const newRoutePath = getDeepestRoutePath(newTree);

    expect(newRoutePath).toBe('/person/andrew');
    expect(oldRoutePath).toBe('/andrew');
    expect(oldRoutePath).not.toBe(newRoutePath);
  });
});

describe('patchTreesRoutePath', () => {
  it('should exist', () => {
    expect(patchTreesRoutePath).toBeDefined();
  });

  it('does not mutate the original array of route tree objects', () => {
    const oldTrees: RouteConfig[] = [
      {
        ...tree,
      },
      {
        path: '/:id',
        component: DummyComponent,
        routes: [
          {
            path: '/test',
            component: DummyComponent,
          },
        ],
      },
    ];

    const newTrees = patchTreesRoutePath(oldTrees) as RouteConfig[];

    const oldRoutePath = getDeepestRoutePath(oldTrees[0]);
    const newRoutePath = getDeepestRoutePath(newTrees[0]);

    expect(newRoutePath).toBe('/person/andrew');
    expect(oldRoutePath).toBe('/andrew');
    expect(oldRoutePath).not.toBe(newRoutePath);
  });
});
