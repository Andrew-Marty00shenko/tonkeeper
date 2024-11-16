import { ReactSVG } from 'react-svg';

import style from './index.module.scss';

type SettingsBlockProps = {
  settings: Array<{ name: string; image: string }>;
};

export const SettingsBlock = ({ settings }: SettingsBlockProps) => {
  return (
    <div className={style.block}>
      {settings.map(({ image, name }, index) => (
        <div key={index} className={style.item}>
          <p>{name}</p>

          {image.includes('svg') ? <ReactSVG src={image} /> : <span>{image}</span>}
        </div>
      ))}
    </div>
  );
};
