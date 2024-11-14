import { ReactSVG } from 'react-svg';

import { Token } from '../../../../model';

import style from './index.module.scss';

type AccountWalletTokenProps = {
  token: Token;
};

// TODO: изменить пропсы после итеграции
export const AccountWalletToken = ({ token }: AccountWalletTokenProps) => {
  return (
    <div className={style.accountWalletToken}>
      <div className={style.image}>
        <ReactSVG src={token.image} />
      </div>

      <div className={style.info}>
        <p className={style.tokenName}>{token.name}</p>

        <div className={style.exchangeRate}>
          <span>${token.exchangeRate.rate}</span>
          <span>{token.exchangeRate.value}%</span>
        </div>
      </div>

      <div className={style.balance}>
        <span>{token.balance.count}</span>
        <span>$ {token.balance.usd}</span>
      </div>
    </div>
  );
};
