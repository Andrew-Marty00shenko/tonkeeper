import { useState } from 'react';

import { AddWalletModal } from '@/features/add-wallet-modal';
import { Button } from '@/shared/ui';

export const GetStartedButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button bg="blue" width="full" height={56} borderRadius={16} onClick={handleClickOpen}>
        Get started
      </Button>

      {isOpen && <AddWalletModal isOpen={isOpen} onClose={handleClickClose} />}
    </>
  );
};
