import { Token } from '../../domain';
import { diService } from '../../index';

export function useService<T>(token: Token<T>) {
  return diService.getInstance(token);
}
