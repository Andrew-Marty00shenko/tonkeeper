import { useLocation, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import style from './index.module.scss';

type AccountItemProps = {
  link: string;
  image: string;
  name: string;
};
export const AccountItem = ({ link, image, name }: AccountItemProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className={style.accountItem} onClick={handleClick}>
      <ReactSVG src={image} className={pathname === link ? style.activeSvg : ''} />

      <p className={pathname === link ? style.activeText : ''}>{name}</p>
    </div>
  );
};
