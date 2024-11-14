import { useNavigate } from 'react-router-dom';

import { generateWords } from '../model';

import style from './index.module.scss';

import { Button, GoBackButton } from '@/shared/ui';

export const GeneratedPhase = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/check-generated-phase');
  };

  return (
    <>
      <GoBackButton />
      <div className={style.generatedPhase}>
        <div className={style.title}>
          <h2>Your recovery phrase</h2>
          <p>Write down these 24 words in the order given below and store them in a secret, safe place.</p>
        </div>

        <div className={style.words}>
          {generateWords(24).map((item, index) => (
            <div key={index} className={style.word}>
              <span> {index + 1}.</span> {item}
            </div>
          ))}
        </div>

        <Button bg="blue" width="full" height={56} borderRadius={16} mt={20} onClick={handleClick}>
          Continue
        </Button>
      </div>
    </>
  );
};
