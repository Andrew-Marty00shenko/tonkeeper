import { CSSProperties, ReactNode } from 'react';

import style from './index.module.scss';

import { getBackgroundColor } from '@/shared/utils';

type ButtonProps = {
  children: ReactNode;

  width?: number | 'full';
  height?: number;
  bg?: 'blue';
  borderRadius?: number;

  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { children, bg, borderRadius, height, width = 'full', onClick } = props;

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
    <button className={style.btn} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};
