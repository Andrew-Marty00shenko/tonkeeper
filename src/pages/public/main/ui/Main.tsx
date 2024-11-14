import { ReactSVG } from 'react-svg';

import { INFOS } from '../model';

import { GetStartedButton } from './GetStardedButton';
import style from './index.module.scss';

import 'react-responsive-modal/styles.css';

export const Main = () => {
  return (
    <section className={style.main}>
      <h1 className={style.title}>
        Welcome <br /> to <span>Tonkeeper</span>
      </h1>

      <div className={style.info}>
        {INFOS.map((info, index) => (
          <div key={index} className={style.infoBlock}>
            <ReactSVG src={info.image} width={'28px'} height={'28px'} />

            <div className={style.texts}>
              <h4>{info.title}</h4>
              <p>{info.text}</p>
            </div>
          </div>
        ))}
      </div>

      <GetStartedButton />
    </section>
  );
};
