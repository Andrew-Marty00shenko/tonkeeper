import { ReactSVG } from 'react-svg';

import { Arrow } from '../../../assets';

import style from './index.module.scss';

type CardProps = {
  image: string;
  title: string;
  text: string;
};

export const Card = ({ image, text, title }: CardProps) => {
  return (
    <div className={style.card}>
      <ReactSVG src={image} />

      <div className={style.info}>
        <h4>{title}</h4>
        <span>{text}</span>
      </div>

      <ReactSVG src={Arrow} />
    </div>
  );
};
