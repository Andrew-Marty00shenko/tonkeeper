import { EmptyHistory } from './EmptyHistory';
import style from './index.module.scss';

export const AccountHistory = () => {
  return (
    <div className={style.accountHistory}>
      <EmptyHistory />
    </div>
  );
};
