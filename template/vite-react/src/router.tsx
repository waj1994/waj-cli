import type { MenuDataItem } from '@ant-design/pro-layout/lib/typing'
import type { RouteObject } from 'react-router-dom'

import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

export type RouteType = MenuDataItem

const routes: RouteType[] = [
  {
    path: '/home',
    component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/list',
    component: lazy(() => import('@/pages/List')),
  },
]

type SyncRoutes = (routes: RouteType[]) => RouteObject[]
const syncRoutes: SyncRoutes = (routes) => {
  return routes.map((item) => {
    return {
      ...item,
      element: (
        <Suspense fallback={<div>loading...</div>}>
          {item.component && <item.component />}
        </Suspense>
      ),
      children: item.children && syncRoutes(item.children),
    }
  })
}

export default function Router() {
  return useRoutes(syncRoutes(routes))
}
