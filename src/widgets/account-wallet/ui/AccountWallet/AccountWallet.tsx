import { useState } from 'react';

import { AccountWalletActions } from './AccountWalletActions';
import { AccountWalletInfo } from './AccountWalletInfo';
import style from './index.module.scss';

import { Dropdown } from '@/entities/account-dropdown';
import { AddWalletModal } from '@/features/add-wallet-modal';

export const AccountWallet = () => {
  const [isOpenAddWallet, setIsOpenAddWallet] = useState(false);

  const handleClickOpenModal = () => {
    setIsOpenAddWallet(true);
  };

  return (
    <>
      <div className={style.accountWallet}>
        <div className={style.dropdown}>
          <Dropdown onClick={handleClickOpenModal} />
        </div>

        <AccountWalletInfo />

        <AccountWalletActions />
      </div>

      {isOpenAddWallet && <AddWalletModal isOpen={isOpenAddWallet} onClose={() => setIsOpenAddWallet(false)} />}
    </>
  );
};
