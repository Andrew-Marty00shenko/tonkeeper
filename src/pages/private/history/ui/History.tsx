import style from './index.module.scss';

import { AccountHistory } from '@/widgets/account-history';
export const History = () => {
  return (
    <main className={style.history}>
      <AccountHistory />
    </main>
  );
};
