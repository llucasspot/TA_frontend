import { FeatureFlip } from '#/utils/action/domain';
import { singleton } from '#/utils/di';

@singleton()
export class ForgotYourPasswordFeatureFlip extends FeatureFlip {
  constructor() {
    super();
  }

  get(): boolean | Promise<boolean> {
    return false;
  }
}
