import classNames from 'classnames';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Styles } from '../../types';

import style from './index.module.scss';
import { useInput } from './useInput';

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
  error?: boolean;
  dynamicLabel?: boolean;
}

export const Input = (props: InputProps) => {
  const { register, name, error, title, dynamicLabel = true } = props;

  const { buttonStyle, focused, handleBlur, handleFocus, ref } = useInput({
    ...props,
  });

  return (
    <div
      className={classNames([style.inputBlock], {
        [style.inputFocused]: focused,
        [style.inputFocusedDynamic]: focused && dynamicLabel,
        [style.error]: error,
      })}
      ref={ref}
      onClick={handleFocus}
    >
      <input
        {...props}
        {...register}
        name={name}
        id="input"
        className={classNames([style.input], {
          [style.withoutDynamicLabel]: !dynamicLabel,
          [style.inputError]: error,
        })}
        style={buttonStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor="input"
        className={classNames({
          [style.error]: error,
          [style.dynamicLabel]: dynamicLabel,
        })}
      >
        {title}
      </label>
    </div>
  );
};
