import { useNavigate } from 'react-router-dom';
import { useFormContext, useWatch } from 'react-hook-form';

import { WalletNameFormState } from '../../model';

import style from './index.module.scss';

import { Button, Input } from '@/shared/ui';
export const CreateWalletActions = () => {
  const { register } = useFormContext();
  const walletName = useWatch<WalletNameFormState>({ name: 'walletName' });
  const navigate = useNavigate();

  const handleCreate = () => {
    if (walletName) {
      localStorage.setItem('isAuth', 'true');
      navigate('/');
    }
  };

  return (
    <div className={style.actions}>
      <Input
        name="walletName"
        register={register('walletName')}
        title="Wallet name"
        borderRadius={16}
        bg="gray"
        height={64}
        type="text"
      />

      <Button
        type="button"
        bg="blue"
        width="full"
        height={56}
        borderRadius={16}
        mt={30}
        disabled={!walletName}
        onClick={handleCreate}
      >
        Save
      </Button>
    </div>
  );
};
