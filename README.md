# react-router-config-recursive-prefixer

A utility function which helps you recursively prefixes your routes with the parent path so that you don't need to type it by hand.

```js
const rootRoutes = patchTreesRoutePath([ // Your typical route tree below...
  {
    path: '/app',
    component: App,
    routes: [
      {
        path: '/', // identical to '/app'!
        exact: true,
        component: RouteConfigComponent,
      },
      {
        path: '/test', // identical to '/app/test'!
        component: Test,
        routes: [
          {
            path: '/this', // identical to '/app/test/this'!
            component: TestThis,
          },
          {
            path: '/that', // identical to '/app/test/that'!
            component: That,
          },
        ],
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]);
```

## Installation
You'll need React, React-Router (or its DOM or Native derivatives), React-Router-Config preinstalled in order to use this library.

**NPM**
```sh
# These are prerequisites
npm install --save react
npm install --save react-router # or react-router-dom... or react-router-native... they also import react-router, anyway
npm install --save react-router-config

# This library
npm install --save react-router-config-recursive-prefixer
```

**Yarn**
```sh
# These are prerequisites
yarn add react
yarn add react-router # or react-router-dom... or react-router-native... they also import react-router, anyway
yarn add react-router-config

# This library
yarn add react-router-config-recursive-prefixer
```

## Contribution
This library is still very much a work in progress was hastily started so that it can be used immediately in bigger projects.

Ideas & support are more than welcome!

1. Fork the project.
2. Run the project in development mode: `yarn develop`.
3. Make changes to the code.
4. Add new tests.
5. Test the code: `yarn test`. If the tests fail, check the code again. Make sure the tests pass!
6. Lint the code: `yarn lint`. Clean up all linting errors.
7. Update this readme with regards to the new API changes.
8. Commit the code.
9. Create a pull request.

## License

_See: [LICENSE.md](LICENSE.md)_

MIT.
