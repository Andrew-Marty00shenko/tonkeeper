import { ReactSVG } from 'react-svg';

import style from './index.module.scss';

type AccountWalletActionProps = {
  image: string;
  name: string;
};
export const AccountWalletAction = ({ image, name }: AccountWalletActionProps) => {
  return (
    <div className={style.accountWalletAction}>
      <div className={style.image}>
        <ReactSVG src={image} />
      </div>

      <p>{name}</p>
    </div>
  );
};
