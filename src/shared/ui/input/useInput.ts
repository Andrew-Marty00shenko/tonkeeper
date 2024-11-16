import { CSSProperties, useRef, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { useOutsideClick } from '@/shared/hooks';
import { Styles } from '@/shared/types';
import { getBackgroundColor } from '@/shared/utils';

interface UseInputProps extends Styles {
  name: string;
}

export const useInput = (props: UseInputProps) => {
  const { bg, height, width, borderRadius, name } = props;

  const ref = useRef<Nullable<HTMLDivElement>>(null);

  const inputStyle: CSSProperties = {
    height: `${height}px`,
    width: width === 'full' ? '100%' : `${width}px`,
    backgroundColor: getBackgroundColor(bg),
    color: 'white',
    borderRadius: `${borderRadius}px`,
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

  useOutsideClick(ref, handleBlur);

  return {
    focused,
    ref,
    inputStyle,
    handleBlur,
    handleFocus,
  };
};
