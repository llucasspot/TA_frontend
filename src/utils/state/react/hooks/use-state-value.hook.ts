import { Token } from '#/utils/di/domain';
import { useService } from '#/utils/di/react';
import { StateValue } from '#/utils/state/domain';

export function useStateValue<T extends object>(
  StateValueType: Token<StateValue<T>>,
): T {
  const statevalue = useService(StateValueType);
  return statevalue.use();
}
