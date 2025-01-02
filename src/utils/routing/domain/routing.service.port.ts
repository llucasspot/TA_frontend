export const routes = {
  root: '/',
  authRoot: '/auth',
  login: '/auth/sign-in',
  home: '/home',
} as const;

export type Route = (typeof routes)[keyof typeof routes];

export abstract class RoutingServicePort {
  abstract redirect(
    path: Route,
    params?: Record<string, string>,
  ): void | Promise<void>;

  abstract usePathname(): string;
}
