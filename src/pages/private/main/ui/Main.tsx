import { useState } from 'react';

import style from './index.module.scss';

import { Dropdown } from '@/entities/account-dropdown';
import { AddWalletModal } from '@/features/add-wallet-modal';

export const Main = () => {
  const [isOpenAddWallet, setIsOpenAddWallet] = useState(false);

  const handleClickOpenModal = () => {
    setIsOpenAddWallet(true);
  };

  return (
    <main className={style.main}>
      <Dropdown onClick={handleClickOpenModal} />

      {isOpenAddWallet && <AddWalletModal isOpen={isOpenAddWallet} onClose={() => setIsOpenAddWallet(false)} />}
    </main>
  );
};
