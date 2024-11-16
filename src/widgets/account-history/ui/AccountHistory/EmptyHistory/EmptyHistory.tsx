import { EMPTY_HISTORY_ACTIONS } from '../../../model';

import { EmptyHistoryAction } from './EmptyHistoryAction';
import style from './index.module.scss';

export const EmptyHistory = () => {
  return (
    <div className={style.emptyHistory}>
      <div className={style.text}>
        <h3>Your history will be shown here</h3>
        <p> Make your first transaction!</p>
      </div>

      <div className={style.actions}>
        {EMPTY_HISTORY_ACTIONS.map((action, index) => (
          <EmptyHistoryAction key={index} {...action} />
        ))}
      </div>
    </div>
  );
};
