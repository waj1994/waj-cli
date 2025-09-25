import {
	type ElementType,
	type LazyExoticComponent,
	lazy,
	type ReactElement,
	Suspense
} from 'react';
import { type RouteObject, useRoutes } from 'react-router-dom';

import Loading from '@/components/loading';

export interface SyncRouteObject {
	component: LazyExoticComponent<() => ReactElement> | ElementType;
	path: string;
	children?: SyncRouteObject[];
	meta?: {
		icon?: ReactElement;
		title?: string;
		menu?: boolean;
	};
}

const routes: SyncRouteObject[] = [
	{
		path: '/',
		component: lazy(() => import('@/components/Single')),
		children: [
			{
				path: '',
				component: lazy(() => import('@/pages/Home'))
			},
			{
				path: '/table',
				component: lazy(() => import('@/pages/table'))
			}
		]
	},
	{
		path: '*',
		component: lazy(() => import('@/pages/404'))
	}
];

type SyncRoutes = (routes: SyncRouteObject[]) => RouteObject[];
const syncRoutes: SyncRoutes = routes => {
	return routes.map(item => ({
		...item,
		element: (
			<Suspense fallback={<Loading />}>
				<item.component />
			</Suspense>
		),
		children: item.children && syncRoutes(item.children)
	}));
};

export default () => useRoutes(syncRoutes(routes));
