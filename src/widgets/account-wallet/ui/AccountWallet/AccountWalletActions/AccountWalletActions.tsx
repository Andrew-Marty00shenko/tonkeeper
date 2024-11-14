import { ACTIONS } from '../../../model';

import { AccountWalletAction } from './AccountWalletAction';
import style from './index.module.scss';

export const AccountWalletActions = () => {
  return (
    <div className={style.accountWalletActions}>
      {ACTIONS.map((action, index) => (
        <AccountWalletAction key={index} {...action} />
      ))}
    </div>
  );
};
