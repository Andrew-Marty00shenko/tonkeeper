import { CSSProperties, ReactNode } from 'react';

import { Styles } from '../../types';
import { getBackgroundColor } from '../../utils';

import style from './index.module.scss';

interface ButtonProps extends Styles {
  children: ReactNode;

  type?: 'submit';

  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { children, bg, borderRadius, height, width = 'full', onClick, type } = props;

  const buttonStyle: CSSProperties = {
    height: `${height}px`,
    width: width === 'full' ? '100%' : `${width}px`,
    backgroundColor: getBackgroundColor(bg),
    color: 'white',
    border: 'none',
    borderRadius: borderRadius,
    cursor: 'pointer',
  };

  return (
    <button type={type} className={style.btn} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};
