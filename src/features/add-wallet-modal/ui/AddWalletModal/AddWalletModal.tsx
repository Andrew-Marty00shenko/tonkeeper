import { Modal } from 'react-responsive-modal';
import { ReactSVG } from 'react-svg';

import { INFOS } from '../../model';

import { Card } from './Card';
import style from './index.module.scss';

import { Close } from '@/shared/assets';

type AddWalletModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddWalletModal = ({ isOpen, onClose }: AddWalletModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeIcon={<ReactSVG src={Close} />}
      styles={{
        modal: {
          background: '#10161F',
          width: '100%',
          margin: 0,
          position: 'fixed',
          bottom: 0,
          left: 0,
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        },
      }}
    >
      <div className={style.title}>
        <h3>Add Wallet</h3>
        <p>Create a new wallet or add an existing one.</p>
      </div>

      <div className={style.infos}>
        {INFOS.map((info, index) => (
          <Card key={index} {...info} />
        ))}
      </div>
    </Modal>
  );
};
