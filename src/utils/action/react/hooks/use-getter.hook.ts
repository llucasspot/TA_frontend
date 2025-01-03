import { useQuery } from '@tanstack/react-query';

import { GetterI } from '#/utils/action/domain';
import { Token } from '#/utils/di/domain';
import { useService } from '#/utils/di/react';

export function useGetter<
  TCacheTags extends string[] | Readonly<string[]>,
  TData,
  TArgs extends unknown[],
>(Getter: Token<GetterI<TCacheTags, TData, TArgs>>, ...args: TArgs) {
  const getter = useService(Getter);
  return useQuery({
    queryKey: getter.cacheTags(...args),
    queryFn: () => getter.get(...args),
  });
}
