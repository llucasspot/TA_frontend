import {
  createRootRouteWithContext,
  createRoute,
} from '@tanstack/react-router';

import { AuthService } from '#/modules/auth/domain';
import { HomePage } from '#/modules/auth/react/pages/home.page';
import { SignInPage } from '#/modules/auth/react/pages/sign-in.page';
import { RoutingServicePort } from '#/utils/routing/domain';
import { OutletLayout, RootLayout } from '#/utils/routing/react/layout';
import { DevToolHeader } from '#/utils/routing/react/layout/dev-kit/dev-kit-header';

type Context = {
  routingService: RoutingServicePort;
  authService: AuthService;
};

export const rootRoute = createRootRouteWithContext<Context>()({
  component: () => (
    <>
      <DevToolHeader />
      <OutletLayout />
    </>
  ),
});

// ----- authLayout -----

export const authLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: OutletLayout,
});

export const signInRoute = createRoute({
  getParentRoute: () => authLayout,
  path: '/sign-in',
  component: SignInPage,
});

// ----- rootLayout -----

export const rootLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: RootLayout,
});

export const homeRoute = createRoute({
  getParentRoute: () => rootLayout,
  path: '/home',
  component: HomePage,
});

// ----- routeTree -----

export const routeTree = rootRoute.addChildren([
  authLayout.addChildren([signInRoute]),
  rootLayout.addChildren([homeRoute]),
]);
