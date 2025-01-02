/* eslint-disable react-hooks/rules-of-hooks */
import { createRouter, useLocation } from '@tanstack/react-router';

import { adapter } from '#/utils/di';
import { RoutingServicePort } from '#/utils/routing/domain';

import { routeTree } from './route-tree';

@adapter(RoutingServicePort)
export class RoutingServiceTanstackAdapter extends RoutingServicePort {
  public static readonly router = createRouter({
    routeTree,
    context: {
      authService: undefined!,
      routingService: undefined!,
    },
  });

  constructor() {
    super();
  }

  redirect(
    path: string,
    params?: Record<string, string>,
  ): void | Promise<void> {
    return RoutingServiceTanstackAdapter.router.navigate({ to: path, params });
  }

  usePathname(): string {
    const location = useLocation();
    return location.pathname;
  }
}
