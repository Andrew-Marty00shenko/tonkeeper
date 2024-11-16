import { FormProvider, useForm } from 'react-hook-form';

import style from './index.module.scss';

import { GoBackButton, Input } from '@/shared/ui';

export const AddExistingWallet = () => {
  const methods = useForm();

  const phases = Array.from({ length: 24 }, (_, index) => index);

  return (
    <FormProvider {...methods}>
      <GoBackButton />

      <form className={style.addExistingWallet}>
        <div className={style.title}>
          <h2>Enter your recovery phrase</h2>
          <p>
            To restore access to your wallet, enter the 24 secret recovery words given to you when you created your
            wallet.
          </p>

          <div className={style.phases}>
            {phases.map((_, index) => (
              <Input
                key={index}
                name={`phase-${index}`}
                title={`${index + 1}: `}
                borderRadius={16}
                bg="gray"
                height={55}
                type="text"
                dynamicLabel={false}
              />
            ))}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
