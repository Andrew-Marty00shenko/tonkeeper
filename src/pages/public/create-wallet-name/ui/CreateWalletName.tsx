import { FormProvider, useForm } from 'react-hook-form';

import { WalletNameFormState } from '../model';

import { CreateWalletActions } from './CreateWalletActions';
import style from './index.module.scss';

export const CreateWalletName = () => {
  const methods = useForm<WalletNameFormState>();

  return (
    <FormProvider {...methods}>
      <form className={style.createWalletName}>
        <div className={style.texts}>
          <h3>Name your wallet</h3>
          <p>
            Name your wallet to easily identify it while using the Tonkeeper. These names are stored locally, and can
            only be seen by you.
          </p>
        </div>

        <CreateWalletActions />
      </form>
    </FormProvider>
  );
};
