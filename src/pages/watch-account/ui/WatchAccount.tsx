import { FormProvider, useForm } from 'react-hook-form';

import style from './index.module.scss';

import { Button, Input } from '@/shared/ui';

export const WatchAccount = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className={style.watchAccount}>
        <div className={style.title}>
          <h2>Watch Account</h2>
          <p>For monitor wallet activity without recovery phrase</p>
        </div>

        <Input
          name="walletAddress"
          register={methods.register('walletAddress')}
          title="Wallet address"
          borderRadius={16}
          bg="gray"
          height={64}
          type="text"
        />
        <Button bg="blue" width="full" height={56} borderRadius={16} type="submit">
          Continue
        </Button>
      </form>
    </FormProvider>
  );
};
