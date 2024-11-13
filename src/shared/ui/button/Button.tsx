import { CSSProperties, ReactNode } from 'react';

import { Styles } from '../../types';
import { getBackgroundColor } from '../../utils';

import style from './index.module.scss';

interface ButtonProps extends Styles {
  children: ReactNode;

  type?: 'submit' | 'button';

  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { children, bg, borderRadius, height, width = 'full', onClick, type, mt, disabled } = props;

  const buttonStyle: CSSProperties = {
    height: `${height}px`,
    width: width === 'full' ? '100%' : `${width}px`,
    backgroundColor: getBackgroundColor(bg),
    opacity: disabled ? '.7' : '1',
    color: 'white',
    border: 'none',
    borderRadius: borderRadius,
    cursor: 'pointer',
    marginTop: mt,
    pointerEvents: disabled ? 'none' : 'auto',
  };

  return (
    <button type={type} className={style.btn} style={buttonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
