import style from './index.module.scss';

import { AccountSettings } from '@/widgets/account-settings';

export const Settings = () => {
  return (
    <div className={style.settings}>
      <h2>Settings</h2>

      <AccountSettings />
    </div>
  );
};
