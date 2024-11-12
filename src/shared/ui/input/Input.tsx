import { CSSProperties, useState } from 'react';
import { useFormContext, UseFormRegisterReturn, useWatch } from 'react-hook-form';

import { Styles } from '../../types';
import { getBackgroundColor } from '../../utils';

import style from './index.module.scss';

interface InputProps extends Styles {
  name: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  register?: UseFormRegisterReturn;
}

export const Input = (props: InputProps) => {
  const { bg, height, width, borderRadius, title, register, name } = props;

  const buttonStyle: CSSProperties = {
    height: `${height}px`,
    width: width === 'full' ? '100%' : `${width}px`,
    backgroundColor: getBackgroundColor(bg),
    color: 'white',
    borderRadius: borderRadius,
    cursor: 'pointer',
  };

  const [focused, setFocused] = useState(false);

  const fieldValue = useWatch({ name });

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!fieldValue) {
      setFocused(false);
    }
  };

  return (
    <div className={`${style.inputBlock} ${focused ? style.inputFocused : ''}`}>
      <input
        {...props}
        {...register}
        name={name}
        id="input"
        className={style.input}
        style={buttonStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label htmlFor="input">{title}</label>
    </div>
  );
};
