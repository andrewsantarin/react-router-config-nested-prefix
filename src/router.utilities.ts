import { RouteConfig } from 'react-router-config';
import { isNullOrUndefined } from 'util';


const patchPathWithParentPath = function patchPathWithParentPath(
  path: string = '',
  parentPath?: string
): string {
  const finalParentPath = !isNullOrUndefined(parentPath) && parentPath !== '/' ? parentPath : '';
  return `${finalParentPath}${path}`;
};

/**
 * (recursive) Prefixes the path of each route node in the route `tree` object with the path of the route node's parent.
 *
 * **Note:** This method returns a modified copy of the original route `tree` object.
 *
 * @export
 *
 * @param {RouteConfig} tree A route node tree
 *
 * @returns {RouteConfig} A new route `tree` object with parent-prefixed paths
 */
export const patchTreeRoutePath = function patchTreeRoutePath(
  tree: RouteConfig
): RouteConfig {
  const newTree = {
    ...tree,
  };

  if (newTree.routes) {
    newTree.routes = [
      ...newTree.routes.map((route) => {
        let newRoute = {
          ...route,
        };

        newRoute.path = patchPathWithParentPath(newRoute.path, newTree.path);
        newRoute = patchTreeRoutePath(newRoute);

        return newRoute;
      }),
    ];
  }

  return newTree;
};

/**
 * (recursive) Prefixes the path of each route node in each route `tree` object with the path of the route node's parent.
 *
 * **Note:** This method returns a modified copy of the original route `trees` array.
 *
 * @export
 *
 * @param {RouteConfig[]} [trees] (optional) An array of route node trees
 *
 * @returns {(RouteConfig[] | undefined)} A new array of route `tree` objects with parent-prefixed paths or `undefined`
 */
export const patchTreesRoutePath = function patchTreesRoutePath(
  trees?: RouteConfig[]
): RouteConfig[] | undefined {
  if (isNullOrUndefined(trees)) {
    return;
  }

  const newTrees = trees.map(patchTreeRoutePath);

  return newTrees;
};
