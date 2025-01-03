import { Outlet } from '@tanstack/react-router';

import { DevToolHeader } from '#/utils/routing/react/layout/dev-kit/dev-kit-header';

export const OutletLayout = () => {
  return (
    <>
      <DevToolHeader />
      <Outlet />
    </>
  );
};
