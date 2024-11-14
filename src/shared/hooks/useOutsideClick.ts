import { RefObject, useCallback, useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => handleClick(e);

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, callback, handleClick]);
};
