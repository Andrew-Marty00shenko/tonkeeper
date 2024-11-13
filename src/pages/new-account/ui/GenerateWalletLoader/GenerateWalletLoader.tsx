import { useEffect, useState } from 'react';

import style from './index.module.scss';

export const GenerateWalletLoader = () => {
  const [text, setText] = useState('Generating wallet...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setText('Your wallet has been created!');
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={style.loader}>
      SOME ICON <h3> {text}</h3>
    </div>
  );
};
