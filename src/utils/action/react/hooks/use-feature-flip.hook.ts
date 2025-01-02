import { FeatureFlipI } from '#/utils/action/domain';
import { Token } from '#/utils/di/domain';
import { useService } from '#/utils/di/react';

export function useFeatureFlip(FeatureFlip: Token<FeatureFlipI>) {
  const featureFlip = useService(FeatureFlip);
  return featureFlip.isFeatureActivated();
}
