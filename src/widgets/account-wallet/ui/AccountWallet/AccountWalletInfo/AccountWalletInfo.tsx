import toast, { Toaster } from 'react-hot-toast';

import style from './index.module.scss';

import { getSlicedWalletAddress } from '@/shared/utils';

export const AccountWalletInfo = () => {
  const onCopy = () => {
    navigator.clipboard.writeText('UQBdQkFBvLpsYM3bke8ATGzz3eZm9mSz9xWeWyBmTjMf2LlT');

    toast('Address copied');
  };

  return (
    <div className={style.accountWalletInfo}>
      <div className={style.balance}>$ 0</div>
      <div className={style.wallet} onClick={onCopy}>
        {getSlicedWalletAddress('UQBdQkFBvLpsYM3bke8ATGzz3eZm9mSz9xWeWyBmTjMf2LlT')}

        <Toaster
          toastOptions={{ style: { backgroundColor: 'rgb(29, 38, 51)', color: '#fff', borderRadius: '26px' } }}
        />
      </div>
    </div>
  );
};
