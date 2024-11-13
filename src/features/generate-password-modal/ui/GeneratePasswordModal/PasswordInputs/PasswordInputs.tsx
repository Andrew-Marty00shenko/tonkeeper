import { useFormContext, useWatch } from 'react-hook-form';

import { PasswordsFormState } from '../../../model';

import style from './index.module.scss';

import { Input } from '@/shared/ui';
export const PasswordInputs = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PasswordsFormState>();

  const password = useWatch<PasswordsFormState, 'password'>({ name: 'password' });
  const isNotSixCharacters = errors.password;
  const isNotEqualPasswords = errors.repeatPassword;

  return (
    <div className={style.passwords}>
      <Input
        name="password"
        register={register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must have at least 6 characters',
          },
        })}
        title="Password"
        borderRadius={16}
        bg="gray"
        height={64}
        type="password"
        error={Boolean(isNotSixCharacters)}
      />

      <span className={isNotSixCharacters ? style.error : ''}>
        {!isNotEqualPasswords ? 'Must be at least 6 characters.' : isNotEqualPasswords.message}
      </span>

      <Input
        name="repeatPassword"
        register={register('repeatPassword', {
          validate: value => value === password || 'The passwords do not match',
        })}
        title="Re-enter password"
        borderRadius={16}
        bg="gray"
        height={64}
        type="password"
        error={Boolean(isNotEqualPasswords)}
      />
    </div>
  );
};
