import { memo, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { Arrow, Plus } from '../../assets';

import style from './index.module.scss';

import { useOutsideClick } from '@/shared/hooks';

type DropdownProps = {
  onClick: () => void;
};

// eslint-disable-next-line react/display-name
export const Dropdown = memo(({ onClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleClickItem = () => {
    handleToggleDropdown();
    onClick();
  };

  useOutsideClick(ref, handleClickOutside);

  return (
    <>
      <div className={style.dropdown} ref={ref}>
        <div className={style.dropdownToggle} onClick={handleToggleDropdown}>
          Account 1 <ReactSVG src={Arrow} />
        </div>

        <div className={`${style.dropdownMenu} ${isOpen ? style.open : ''} `}>
          <div className={style.dropdownItem} onClick={handleClickItem}>
            Set up wallet <ReactSVG src={Plus} />
          </div>
        </div>
      </div>
    </>
  );
});
