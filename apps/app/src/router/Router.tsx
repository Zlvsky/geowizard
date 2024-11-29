import PageNotFound from '@/views/404'
import { Route, Routes } from 'react-router-dom'
import { routes } from './data'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        {/* PUBLIC */}
        {routes.public.map((route, index) => (
          <Route
            key={'PUBLIC_ROUTE_' + index}
            path={route.path}
            element={<route.component />}
            {...route.props}
          />
        ))}
      </Route>
      {/* 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
