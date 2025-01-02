import { Getter, GetterI } from '#/utils/action/domain/getter';

export const featureFlipKeys = {
  all: ['feature-flip'] as const,
  lists: () => [...featureFlipKeys.all, 'list'] as const,
  list: (filters: string) => [...featureFlipKeys.lists(), { filters }] as const,
  details: () => [...featureFlipKeys.all, 'detail'] as const,
  detail: (id: string) => [...featureFlipKeys.details(), id] as const,
};

export abstract class FeatureFlipI {
  abstract isFeatureActivated(): boolean | Promise<boolean>;
}

export abstract class FeatureFlip
  extends Getter<ReturnType<typeof featureFlipKeys.detail>, boolean, []>
  implements GetterI<ReturnType<typeof featureFlipKeys.detail>, boolean, []>
{
  constructor() {
    super(() => featureFlipKeys.detail(this.constructor.name));
  }
}
