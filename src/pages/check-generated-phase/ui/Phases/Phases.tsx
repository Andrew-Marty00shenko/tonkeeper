import { useState } from 'react';
import { useWatch } from 'react-hook-form';

import style from './index.module.scss';
import { InputPhase } from './InputPhase';

import { GeneratePasswordModal } from '@/features/generate-password-modal';
import { Button } from '@/shared/ui';
export const Phases = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phasesFields = useWatch({ name: [`phase-0`, `phase-1`, `phase-2`] });

  const isAllPhasesFilled = phasesFields.every(Boolean);

  const phases = Array.from({ length: 3 }, (_, index) => index);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={style.phases}>
        {phases.map((_, index) => (
          <InputPhase key={index} index={index} />
        ))}
      </div>

      <Button
        type="button"
        bg="blue"
        width="full"
        height={56}
        borderRadius={16}
        mt={30}
        onClick={handleClickOpen}
        disabled={!isAllPhasesFilled}
      >
        Continue
      </Button>

      {isOpen && <GeneratePasswordModal isOpen={isOpen} onClose={handleClickClose} />}
    </>
  );
};
