import Home from '@/views/home'

const publicPaths = {
  HOME: '/'
}

/**
 * Object containing paths for the router.
 */
export const PATHS = {
  ...publicPaths
}

const createRoute = (
  path: string,
  component: React.ComponentType,
  props?: Record<string, any>
) => ({
  path,
  component,
  props
})

/**
 * Routes configuration object.
 */
export const routes = {
  public: [createRoute(PATHS.HOME, Home, { index: true })],
  nonAuthenticated: [],
  authenticated: []
}
