import { FormProvider, useForm } from 'react-hook-form';

import style from './index.module.scss';
import { Phases } from './Phases';

import { GoBackButton } from '@/shared/ui';

export const CheckGeneratedPhase = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <GoBackButton />

      <form className={style.checkGeneratedPhase}>
        <div className={style.title}>
          <h2>So, let&apos;s check</h2>
          <p>
            To check whether you’ve written down your recovery phrase correctly, please enter the 5th, 14th, and 21st
            words.
          </p>
        </div>

        <Phases />
      </form>
    </FormProvider>
  );
};
