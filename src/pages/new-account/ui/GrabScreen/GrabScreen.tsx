import { useNavigate } from 'react-router-dom';

import style from './index.module.scss';

import { Button } from '@/shared/ui';

export const GrabScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/generated-phase');
  };

  return (
    <div className={style.grabScreen}>
      <div className={style.title}>
        <h2>Grab a pen and a piece of paper</h2>
        <p>
          We strongly recommend you write down the recovery phrase because it’s the only way to have access to and
          recover your wallet in case of losing your device. Do not send it to yourself via email or take a screenshot.
          It’s safer when kept offline.
        </p>
      </div>

      <Button bg="blue" width="full" height={56} borderRadius={16} mt={40} onClick={handleClick}>
        Continue
      </Button>
    </div>
  );
};
