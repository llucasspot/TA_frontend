import {
  createRootRouteWithContext,
  createRoute,
  redirect,
} from '@tanstack/react-router';

import { AuthService } from '#/modules/auth/domain';
import { HomePage } from '#/modules/auth/react/pages/home.page';
import { SignInPage } from '#/modules/auth/react/pages/sign-in.page';
import { RoutingServicePort } from '#/utils/routing/domain';
import { OutletLayout, RootLayout } from '#/utils/routing/react/layout';

type Context = {
  routingService: RoutingServicePort;
  authService: AuthService;
};

export const rootRoute = createRootRouteWithContext<Context>()({
  component: OutletLayout,
});

// ----- authLayout -----

export const authLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: OutletLayout,
  beforeLoad: ({ context }) => {
    if (context.authService.isAuthenticated()) {
      throw redirect({ to: '/home' });
    }
  },
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
  beforeLoad: ({ context }) => {
    if (!context.authService.isAuthenticated()) {
      throw redirect({ to: '/auth/sign-in' });
    }
  },
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
