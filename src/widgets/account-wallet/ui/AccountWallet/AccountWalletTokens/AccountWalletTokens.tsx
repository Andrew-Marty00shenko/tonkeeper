import { TOKENS_MOCK } from '../../../__fixtures__';

import { AccountWalletToken } from './AccountWalletToken';
import style from './index.module.scss';

export const AccountWalletTokens = () => {
  return (
    <div className={style.accountWalletTokens}>
      {/* TODO: убрать мок, когда будет реализована интеграция */}
      {TOKENS_MOCK.map(token => (
        <AccountWalletToken key={token.name} token={token} />
      ))}
    </div>
  );
};
