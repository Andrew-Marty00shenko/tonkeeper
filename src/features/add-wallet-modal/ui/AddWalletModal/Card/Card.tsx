import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { Arrow } from '../../../assets';

import style from './index.module.scss';

type CardProps = {
  image: string;
  title: string;
  text: string;
  link: string;
};

export const Card = ({ image, text, title, link }: CardProps) => {
  return (
    <Link to={link}>
      <div className={style.card}>
        <ReactSVG src={image} />

        <div className={style.info}>
          <h4>{title}</h4>
          <span>{text}</span>
        </div>

        <ReactSVG src={Arrow} />
      </div>
    </Link>
  );
};
