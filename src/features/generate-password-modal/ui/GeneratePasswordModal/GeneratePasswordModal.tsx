import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import { PasswordsFormState } from '../../model';

import style from './index.module.scss';
import { PasswordInputs } from './PasswordInputs';

import { Button } from '@/shared/ui';

type GeneratePasswordModalProps = { isOpen: boolean; onClose: () => void };
export const GeneratePasswordModal = ({ isOpen, onClose }: GeneratePasswordModalProps) => {
  const methods = useForm<PasswordsFormState>();

  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.setItem('isAuth', 'true');

    navigate('/');
  };

  return (
    <FormProvider {...methods}>
      <Modal
        open={isOpen}
        onClose={onClose}
        showCloseIcon={false}
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
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={style.name}>
            <h3>Enter password</h3>
          </div>

          <div className={style.title}>
            <h3>Create password</h3>
          </div>

          <PasswordInputs />

          <Button bg="blue" width="full" height={56} borderRadius={16} mt={30}>
            Continue
          </Button>
        </form>
      </Modal>
    </FormProvider>
  );
};
