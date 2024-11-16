import { ReactSVG } from 'react-svg';

import style from './index.module.scss';

type EmptyHistoryActionProps = {
  image: string;
  name: string;
};

export const EmptyHistoryAction = ({ image, name }: EmptyHistoryActionProps) => {
  return (
    <div className={style.action}>
      <ReactSVG src={image} />

      <p>{name}</p>
    </div>
  );
};
