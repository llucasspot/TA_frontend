import { QueryClient } from '@tanstack/react-query';

import { Module } from '#/utils/di';

import { CacheServiceReactQueryAdapter } from './infra/cache.service.react-query-adapter';

@Module({
  providers: [
    {
      token: QueryClient,
      useValue: new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60 * 60, // 1 hour
          },
        },
      }),
    },
    CacheServiceReactQueryAdapter,
  ],
})
export class CacheModule {}
