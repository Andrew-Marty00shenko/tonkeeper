import { GenerateWalletLoader } from './GenerateWalletLoader';
import { GrabScreen } from './GrabScreen';

import { Stepper } from '@/shared/ui';

export const NewAccount = () => {
  const steps = [<GenerateWalletLoader key="loader" />, <GrabScreen key="grabScreen" />];

  return <Stepper steps={steps} />;
};
