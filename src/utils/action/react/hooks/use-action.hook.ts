import { useMutation } from '@tanstack/react-query';

import { ActionI } from '#/utils/action/domain';
import { Token } from '#/utils/di/domain';
import { useService } from '#/utils/di/react';
import { ToastService } from '#/utils/toast/domain';

export function useAction<TData, TBody>(Action: Token<ActionI<TData, TBody>>) {
  const action = useService(Action);
  const toastService = useService(ToastService);

  return useMutation({
    mutationFn: async (body: TBody) => {
      return toastService.promise(() => action.execute(body), action.i18nKeys);
    },
    onSuccess: (data, body) => {
      return action.onSuccess(data, body);
    },
    onError: (error) => {
      return action.onError(error);
    },
  });
}
