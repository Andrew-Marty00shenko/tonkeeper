import { MENU } from '../../model';

import { AccountItem } from './AccountItem';
import style from './index.module.scss';

export const AccountMenu = () => {
  return (
    <div className={style.accountMenu}>
      {MENU.map(item => (
        <AccountItem key={item.link} {...item} />
      ))}
    </div>
  );
};
