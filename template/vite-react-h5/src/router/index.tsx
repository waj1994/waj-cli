import {
  ElementType,
  lazy,
  LazyExoticComponent,
  ReactElement,
  Suspense
} from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

interface SyncRouteObject {
  component: LazyExoticComponent<() => ReactElement> | ElementType;
  path?: string;
  children?: SyncRouteObject[];
}

const routes: SyncRouteObject[] = [
  {
    path: '/',
    component: lazy(() => import('../components/layout/index')),
    children: [
      {
        path: '/',
        component: lazy(() => import('../pages/home'))
      }
    ]
  }
];

type SyncRoutes = (routes: SyncRouteObject[]) => RouteObject[];
const syncRoutes: SyncRoutes = routes => {
  return routes.map(item => ({
    ...item,
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <item.component />
      </Suspense>
    ),
    children: item.children && syncRoutes(item.children)
  }));
};

export default () => useRoutes(syncRoutes(routes));
