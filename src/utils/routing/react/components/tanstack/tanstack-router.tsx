import { RouterProvider } from '@tanstack/react-router';

import { AuthService } from '#/modules/auth/domain';
import { useService } from '#/utils/di/react';
import { RoutingServicePort } from '#/utils/routing/domain';

import { RoutingServiceTanstackAdapter } from '../../../infra';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof RoutingServiceTanstackAdapter.router;
  }
}

export function TanstackRouter() {
  const authService = useService(AuthService);
  const routingService = useService(RoutingServicePort);

  // TODO
  const basepath = import.meta.env.VITE_BASE_PATH ?? '/';
  console.log('basepath : ', basepath);

  return (
    <RouterProvider
      basepath={basepath}
      router={RoutingServiceTanstackAdapter.router}
      context={{
        authService,
        routingService,
      }}
    />
  );
}
