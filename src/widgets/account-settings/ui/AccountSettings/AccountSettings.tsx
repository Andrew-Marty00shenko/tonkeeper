import { DELETE_ACCOUNT, INFO_SETTINGS, MAIN_SETTINGS, OTHER_SETTINGS } from '../../model';

import style from './index.module.scss';
import { SettingsBlock } from './SettingsBlock';

export const AccountSettings = () => {
  return (
    <div className={style.accountSettings}>
      <SettingsBlock settings={MAIN_SETTINGS} />

      <SettingsBlock settings={OTHER_SETTINGS} />

      <SettingsBlock settings={INFO_SETTINGS} />

      <SettingsBlock settings={DELETE_ACCOUNT} />
    </div>
  );
};
