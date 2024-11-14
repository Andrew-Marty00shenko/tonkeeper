import style from './index.module.scss';

import { getSlicedWalletAddress } from '@/shared/utils';

export const AccountWalletInfo = () => {
  return (
    <div className={style.accountWalletInfo}>
      <div className={style.balance}>$ 0</div>
      <div className={style.wallet}>{getSlicedWalletAddress('UQBdQkFBvLpsYM3bke8ATGzz3eZm9mSz9xWeWyBmTjMf2LlT')}</div>
    </div>
  );
};
